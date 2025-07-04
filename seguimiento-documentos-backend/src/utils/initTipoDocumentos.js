const TipoDocumento = require('../models/TipoDocumento');

const tipoDocumentos = [
  'ACTA',
  'ACTA DE NOTIFICACION',
  'ACTA DE VERIFICACION TECNICA DE CAMPO',
  'AUTORIZACION DE CIRCULACION',
  'AVISO OFICIAL',
  'AYUDA MEMORIA',
  'CARTA',
  'CARTA MULTIPLE',
  'CARTA NOTARIAL',
  'CARTA PODER',
  'CEDULA DE NOTIFICACION',
  'CERTIFICADO DE PRACTICAS',
  'CERTIFICADO DE TRABAJO',
  'CONFORMIDAD DE BIENES',
  'CONFORMIDAD DE SERVICIOS',
  'CONSTANCIA',
  'CONSTANCIA DE CAPACIDAD DE ENDEUDAMIENTO',
  'CONSTANCIA DE DERECHO DE USO DE AGUA',
  'CONSTANCIA DE EXPEDIENTE INCORPORADO',
  'CONSTANCIA DE PRESTACION',
  'CONSTANCIA DE PRESTACION DE SERVICIO',
  'CONSTANCIA DE TRABAJO',
  'CONSTANCIA TEMPORAL',
  'CREDENCIAL',
  'DIRECTIVA',
  'DIRECTIVA GENERAL',
  'E_MAIL',
  'ESQUELA',
  'FE DE ERRATAS',
  'FORMATO',
  'FORMULARIO DE ATENCION DE SERVICIO ARCHIVISTICOS',
  'FORMULARIO DE PRESTAMO',
  'HOJA DE ELEVACION',
  'INFORME',
  'INFORME DE FORMALIZACION',
  'INFORME DE PRECALIFICACION',
  'INFORME ESCALAFONARIO',
  'INFORME FUNDAMENTADO',
  'INFORME LEGAL',
  'INFORME PRELIMINAR',
  'INFORME TECNICO',
  'INFORME TÉCNICO DE COMPATIBILIZACIÓN',
  'INFORME TÉCNICO DE ESTANDARIZACIÓN',
  'INFORME TECNICO LEGAL',
  'INFORME TECNICO PREVIO DE EVALUACION DE SOFTWARE',
  'MEMORANDO',
  'MEMORANDO MULTIPLE',
  'NOTA DE ENVIO',
  'NOTA DE PRENSA',
  'NOTIFICACION',
  'NOTIFICACION MULTIPLE',
  'OFICIO',
  'OFICIO CIRCULAR',
  'OFICIO MULTIPLE',
  'OPINION TECNICA PREVIA VINCULANTE',
  'ORDEN DE NOTIFICACION',
  'PEDIDO DE SUMINISTRO',
  'PLAN DE TRABAJO',
  'PROVEIDO',
  'REGISTRO FASE DE GASTO DEVENGADO EN EL SIAF',
  'REQUERIMIENTO DE BIENES Y SERVICIOS',
  'RESOLUCION',
  'RESOLUCION ADMINISTRATIVA',
  'RESOLUCION DE EJECUCION COATIVA',
  'RESOLUCION DE GERENCIA GENERAL',
  'RESOLUCION DIRECTORAL',
  'RESOLUCION JEFATURAL',
  'RESOLUCION SUBDIRECTORAL',
  'SOBRE',
  'SOLICITUD',
  'RECURSO DE RECONSIDERACION',
  'DENUNCIA',
  'SUMILLA',
  'FORMULARIO',
  'SOLICITUD DE REVISION',
  'RECIBO DE INGRESOS'
];

async function initTipoDocumentos() {
  try {
    // Verificar si ya existen tipos de documentos en la base de datos
    const count = await TipoDocumento.count();
    
    // Si ya hay registros, no ejecutar la inicialización
    if (count > 0) {
      console.log('Los tipos de documentos ya están inicializados. Omitiendo...');
      return;
    }
    
    // Si no hay registros, proceder con la inicialización
    for (const nombre of tipoDocumentos) {
      await TipoDocumento.create({ nombre });
      console.log(`Tipo de documento '${nombre}' creado.`);
    }
    console.log('Inicialización de tipos de documentos completada.');
  } catch (error) {
    console.error('Error al inicializar tipos de documentos:', error);
  }
}

module.exports = initTipoDocumentos;