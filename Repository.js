// --- 1. CAPA DE ACCESO A DATOS (El Repositorio) ---
class UsuarioRepository {
  constructor() {
    // Simulación de una tabla en base de datos
    this.usuariosBD = [
      { id: 1, nombre: "Sofía", email: "sofia@mail.com" },
      { id: 2, nombre: "Mateo", email: "mateo@mail.com" }
    ];
  }

  // Método para consultar datos
  obtenerTodos() {
    // Aquí en un proyecto real iría la consulta: 
    // ej. return db.query('SELECT * FROM usuarios');
    return this.usuariosBD;
  }

  // Método para guardar datos
  guardar(usuario) {
    // Aquí iría el INSERT INTO o db.collection.insertOne()
    this.usuariosBD.push(usuario);
    return usuario;
  }
}

// --- 2. CAPA DE LÓGICA DE NEGOCIO / DEMOSTRACIÓN ---
// Instanciamos el repositorio
const repo = new UsuarioRepository();

// La lógica del sistema usa los métodos limpios del repositorio
console.log("1. Estado inicial de la base de datos:");
console.log(repo.obtenerTodos());

console.log("\n2. Insertando un nuevo usuario a través del repositorio...");
repo.guardar({ id: 3, nombre: "Elena", email: "elena@mail.com" });

console.log("\n3. Estado actualizado:");
console.log(repo.obtenerTodos());
