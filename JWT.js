// --- 1. Cliente HTTP e Interceptor (Para la sección de Código) ---
class HttpClient {
  constructor() {
    this.interceptores = [];
  }
  usarInterceptor(fn) {
    this.interceptores.push(fn);
  }
  async fetch(url, opciones = {}) {
    let configuracion = { ...opciones, headers: { ...opciones.headers } };
    for (const interceptor of this.interceptores) {
      configuracion = await interceptor(configuracion);
    }
    console.log("Enviando petición a:", url);
    console.log("Encabezados finales:", configuracion.headers);
    return { status: 200, data: "Perfil obtenido correctamente" };
  }
}

const api = new HttpClient();

// Registro del interceptor
api.usarInterceptor((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0";
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// --- 2. Demostración (Para la sección de Demo) ---
async function obtenerPerfil() {
  const respuesta = await api.fetch("https://api.mitienda.com/v1/perfil");
  console.log("Resultado:", respuesta.data);
}

obtenerPerfil();
