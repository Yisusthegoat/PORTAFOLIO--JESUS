import 'fake-indexeddb/auto';
import assert from 'node:assert/strict';
import test from 'node:test';
import { getLocalContacts, saveLocalContact } from '../src/localContacts.js';

test('registro local de contactos', async (context) => {
  await context.test('una base nueva comienza sin mensajes', async () => {
    assert.deepEqual(await getLocalContacts(), []);
  });

  await context.test('valida campos y no guarda registros incompletos', async () => {
    for (const values of [
      { name: '  ', email: 'test@example.com', message: 'Consulta' },
      { name: 'Prueba', email: 'correo-invalido', message: 'Consulta' },
      { name: 'Prueba', email: 'test@example.com', message: '\n  ' },
    ]) {
      await assert.rejects(saveLocalContact(values), /Completa/);
    }
    assert.deepEqual(await getLocalContacts(), []);
  });

  await context.test('conserva registros al cerrar y reabrir conexiones, con el más reciente primero', async () => {
    const first = await saveLocalContact({ name: '  Prueba uno ', email: ' uno@example.com ', message: 'Primera línea\nSegunda línea' });
    const second = await saveLocalContact({ name: 'Prueba dos', email: 'dos@example.com', message: '<script>texto de prueba</script>' });
    assert.equal(first.name, 'Prueba uno');
    assert.equal(first.email, 'uno@example.com');
    assert.ok(first.id < second.id);
    assert.ok(Number.isFinite(Date.parse(first.createdAt)));
    // Cada operación abre una nueva conexión, equivalente a volver a acceder tras una recarga.
    assert.deepEqual(await getLocalContacts(), [second, first]);
    assert.deepEqual(await getLocalContacts(), [second, first]);
  });

  await context.test('informa cuando el almacenamiento no está disponible', async () => {
    const original = globalThis.indexedDB;
    try {
      globalThis.indexedDB = undefined;
      await assert.rejects(getLocalContacts(), /no permite/);
    } finally {
      globalThis.indexedDB = original;
    }
  });
});
