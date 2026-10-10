// --- 1. Clases y Fábrica (Para la sección de Código) ---
class NotificacionEmail {
  enviar(mensaje) {
    console.log(`[EMAIL] Enviando correo: "${mensaje}"`);
  }
}

class NotificacionSMS {
  enviar(mensaje) {
    console.log(`[SMS] Enviando mensaje de texto: "${mensaje}"`);
  }
}

class NotificacionWhatsApp {
  enviar(mensaje) {
    console.log(`[WHATSAPP] Enviando mensaje de WA: "${mensaje}"`);
  }
}

class NotificacionFactory {
  static crearNotificacion(tipo) {
    switch (tipo.toLowerCase()) {
      case "email": return new NotificacionEmail();
      case "sms": return new NotificacionSMS();
      case "whatsapp": return new NotificacionWhatsApp();
      default: throw new Error("Tipo no soportado");
    }
  }
}

// --- 2. Demostración (Para la sección de Demo) ---
const canalConfigurado = "whatsapp"; 
const servicio = NotificacionFactory.crearNotificacion(canalConfigurado);
servicio.enviar("Tu código de verificación es 8492");
