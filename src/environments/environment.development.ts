export const environment = {};

export const baseUrl = "http://localhost:3000";

export const publicPath = (path: string): string => {
  return path[0] === "/"
    ? `${baseUrl}${path.replace("/public", "")}`
    : `${baseUrl}${path.replace("public", "")}`
}

export const endpoints = {
  auth: {
    signUp: `${baseUrl}/auth/sign-up`,
    signIn: `${baseUrl}/auth/sign-in`,
    getAuthUser: `${baseUrl}/auth/user`
  },
  file: {
    upload: `${baseUrl}/file/upload`,
    getAll: `${baseUrl}/file`,
  }
}
