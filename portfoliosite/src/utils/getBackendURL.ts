const getBackendURL = () => {
  // @ts-ignore
  const envURL = import.meta.env.VITE_BACKEND_URL;

  if (envURL) {
    return envURL;
  }

  const mode = process.env.NODE_ENV;

  if (mode === "development") {
    return "http://localhost:5173/api"; //https://drivingthetestdrive.blowupthenoobs.dev/api to run online
  }

  return window.location.origin;
};

export default getBackendURL;
