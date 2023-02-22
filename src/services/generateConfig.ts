export function generateConfig(token?: string | null) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  } as any;

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
}
