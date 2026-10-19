import { useEffect, useState } from 'react';
import { getLocalContacts, saveLocalContact } from '../localContacts';

const emptyForm = { name: '', email: '', message: '' };

export default function LocalContact() {
  const [form, setForm] = useState(emptyForm);
  const [contacts, setContacts] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [notice, setNotice] = useState(null);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    let active = true;
    getLocalContacts().then((records) => {
      if (active) setContacts(records);
    }).catch((error) => {
      if (active) setLoadError(error.message);
    });
    return () => { active = false; };
  }, []);

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    setNotice(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSaving) return;
    setIsSaving(true);
    setNotice(null);
    try {
      const record = await saveLocalContact(form);
      setContacts((previous) => [record, ...previous]);
      setForm(emptyForm);
      setLoadError('');
      setNotice({ type: 'success', message: 'Mensaje guardado en este navegador. Puedes consultarlo en los registros.' });
    } catch (error) {
      setNotice({ type: 'error', message: error.message });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section id="contact" className="local-contact mt-32">
      <div className="contact-intro">
        <p className="section-eyebrow">03 / CONECTEMOS</p>
        <h2>Una idea empieza<br />con una conversación.</h2>
        <p>Registra una consulta o una idea para un próximo proyecto.</p>
        <div className="local-storage-note">
          <i className="ri-database-2-line" aria-hidden="true" />
          <div><strong>Registro local</strong><p>Los mensajes se guardan en este navegador y se conservan al recargar. No se envían por correo ni se comparten con otros dispositivos. Si borras los datos del sitio, también se eliminan.</p></div>
        </div>
      </div>
      <div className="contact-workspace">
        <form onSubmit={handleSubmit} className="local-contact-form">
          <label htmlFor="contact-name">Nombre completo</label>
          <input id="contact-name" name="name" value={form.name} onChange={handleChange} autoComplete="name" placeholder="¿Cómo te llamas?" maxLength={120} required disabled={isSaving} />
          <label htmlFor="contact-email">Correo electrónico</label>
          <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" placeholder="nombre@correo.com" maxLength={254} required disabled={isSaving} />
          <label htmlFor="contact-message">Tu mensaje</label>
          <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Cuéntame tu idea…" rows={5} maxLength={5000} required disabled={isSaving} />
          {notice && <p role={notice.type === 'error' ? 'alert' : 'status'} className={`contact-notice ${notice.type}`}>{notice.message}</p>}
          <button type="submit" disabled={isSaving}>{isSaving ? 'Guardando…' : 'Guardar mensaje'} <span aria-hidden="true">↗</span></button>
        </form>
        <details className="local-records">
          <summary>Registros de este navegador <span>{contacts.length}</span></summary>
          {loadError ? <p role="alert">{loadError}</p> : contacts.length === 0 ? <p>Aún no hay mensajes guardados.</p> : (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <div className="record-heading"><strong>{contact.name}</strong><time dateTime={contact.createdAt}>{new Date(contact.createdAt).toLocaleString('es-PE')}</time></div>
                  <p className="record-email">{contact.email}</p>
                  <p className="record-message">{contact.message}</p>
                </li>
              ))}
            </ul>
          )}
        </details>
      </div>
    </section>
  );
}
