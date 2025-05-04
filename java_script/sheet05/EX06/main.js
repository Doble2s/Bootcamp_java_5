const obtener_Temperatura = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("22°C");
    }, 2000);
  });
};

const obtener_humedad = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("60%");
    }, 1500);
  });
};

const obtener_viento = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("15 km/h");
    }, 1000);
  });
};

const resultados = async () => {
    const valores_obtenidos = await Promise.all([obtener_Temperatura(), obtener_humedad(),obtener_viento()]);
  console.log(`=== Clima ===\n
Temperatura: ${valores_obtenidos[0]}\n
Humedad: ${valores_obtenidos[1]}\n
Viento: ${valores_obtenidos[2]}\n `);
};
