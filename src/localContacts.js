const DATABASE_NAME = 'jesus-portfolio';
const STORE_NAME = 'contacts';

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) {
      reject(new Error('Este navegador no permite usar la base de datos local.'));
      return;
    }
    const request = indexedDB.open(DATABASE_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    };
    request.onerror = () => reject(new Error('No se pudo abrir la base de datos local.'));
    request.onblocked = () => reject(new Error('Cierra otras pestañas del portafolio e intenta de nuevo.'));
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
  });
}

async function runTransaction(mode, operation) {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, mode);
    const request = operation(transaction.objectStore(STORE_NAME));
    transaction.oncomplete = () => {
      database.close();
      resolve(request.result);
    };
    transaction.onabort = () => {
      database.close();
      reject(new Error('No se pudo completar la operación. Revisa el espacio y los permisos del navegador.'));
    };
  });
}

export async function getLocalContacts() {
  const contacts = await runTransaction('readonly', (store) => store.getAll());
  return contacts.sort((first, second) => second.id - first.id);
}

export async function saveLocalContact(values) {
  const contact = {
    name: values.name.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
    createdAt: new Date().toISOString(),
  };
  if (!contact.name || !contact.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
    throw new Error('Completa el nombre, un correo válido y el mensaje.');
  }
  const id = await runTransaction('readwrite', (store) => store.add(contact));
  return { ...contact, id };
}
