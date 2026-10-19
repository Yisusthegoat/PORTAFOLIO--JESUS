# Portafolio Web — [Jesus Antonio Ñahuinripa Zamudio]

🌐  

El formulario de contacto usa IndexedDB (`jesus-portfolio`, almacén `contacts`). Guarda nombre, correo, mensaje y fecha en el navegador actual, sin servidor ni Supabase. Los registros se pueden consultar bajo el formulario y persisten al recargar el mismo origen. Otro navegador, puerto o dispositivo tiene su propio almacenamiento; borrar los datos del sitio elimina los registros. Este modo no envía correos.

Pruebas del almacenamiento local: `node --test tests/localContacts.test.mjs`.
