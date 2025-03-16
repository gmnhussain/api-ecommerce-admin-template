import { SERVER } from './config';

// export const getStoragePath = (path: string) => `${SERVER}/${path}`;

// export const getStorageImageUrl = (path: string) => `${SERVER}/images/${path}`;

// export const getStorageVideoUrl = (path: string) => `${SERVER}/videos/${path}`;

// export const getStorageAudioUrl = (path: string) => `${SERVER}/audios/${path}`;

// export const getStoragePdfUrl = (path: string) => `${SERVER}/pdfs/${path}`;

// export const getStorageDocUrl = (path: string) => `${SERVER}/docs/${path}`;

// export const getStorageUrl = (
//   path: string,
//   type?: 'image' | 'video' | 'audio' | 'pdf' | 'doc'
// ) => {
//   let basePath = SERVER;
//   if (type) basePath += `/${type}s`;
//   return `${basePath}/${path}`;
// };

export const getStorageUrl = (
  path?: string,
  type?: 'image' | 'video' | 'audio' | 'pdf' | 'doc'
): string | null => {
  if (!path || !type) return null; // Return null if missing required parameters

  const sanitizedPath = path.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
  return `${SERVER}/${type}s/${sanitizedPath}`;
};
