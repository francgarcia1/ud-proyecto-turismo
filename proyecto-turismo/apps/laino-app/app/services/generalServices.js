export const createProduct = async (param) => {
  const response = fetch("url", {
    method: "POST",
    body: JSON.stringify(param),
  });
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};

export const getCities = async () => {
  const response = await fetch("http://localhost:3000/localidades");

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};

export const getActividades = async () => {
  const response = await fetch("http://localhost:3000/actividades");

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};

export const getActividadesDatos = async (nombre) => {
  const response = await fetch(
    `http://localhost:3000/actividadesDatos/${encodeURIComponent(nombre)}`
  );

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};

export const getLocalidadesDatos = async (nombre) => {
  const response = await fetch(
    `http://localhost:3000/localidadesDatos/${encodeURIComponent(nombre)}`
  );

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};

export const updateProduct = async (param) => {
  const response = await fetch("url", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  });

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};

export const patchProduct = async (param) => {
  const response = await fetch(``, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  });

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else {
    const errors = await response.json();
    throw new Error(errors);
  }
};
