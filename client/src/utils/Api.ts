const ROOT = `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}`;

export async function ApiRequest(
  endpoint: string,
  method: string,
  data: FormData | null = null
) {
  try {
    // Send request to server
    const resp = await fetch(ROOT + endpoint, {
      method: method,
      body: data,
    });

    // Use JSON response
    const respJson = await resp.json();

    // Unsucessful response
    if (!resp.ok) {
      return {
        ok: false,
        message: respJson.message,
      };
    }

    // Successful response
    console.log(`🔌Success in ${method} request to ${endpoint}:`);
    console.log(respJson);
    return {
      ...respJson,
      ok: true,
    };
  } catch (error) {
    console.error(`🔌Error in ${method} to ${endpoint}:`, error);
    return {
      ok: false,
      message: "Hubo un error inesperado en la solicitud",
    };
  }
}
