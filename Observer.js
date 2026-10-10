// --- 1. Clases (Para la sección de Código) ---
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
  recibirNotificacion(producto) {
    console.log(`[Notificación para ${this.nombre}]: ¡El producto "${producto}" ya está disponible!`);
  }
}

class TiendaOnline {
  constructor() {
    this.suscriptores = [];
  }
  suscribir(usuario) {
    this.suscriptores.push(usuario);
  }
  cambiarStock(producto) {
    console.log(`\n--- Stock actualizado: ${producto} ---`);
    this.suscriptores.forEach(sub => sub.recibirNotificacion(producto));
  }
}

// --- 2. Demostración (Para la sección de Demo) ---
const tienda = new TiendaOnline();
const carlos = new Usuario("Carlos");
const ana = new Usuario("Ana");

tienda.suscribir(carlos);
tienda.suscribir(ana);

tienda.cambiarStock("PlayStation 5");
