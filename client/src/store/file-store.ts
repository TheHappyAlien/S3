import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axiosInstance from '../../axiosConfig';
import FileDto from '../store/dto/File.dto';

export interface FileStore {
  files?: FileDto[];
  fetchFiles: () => void;
  // deleteFile: (fileId: string) => void;
}

export const UseFileStore = create<FileStore>()(
  persist((set) => ({
    files: undefined,
    fetchFiles: async () => {
        try {
          const response = await axiosInstance.get<FileDto[]>('/api');
          set({files: response.data});
        } catch (error) {
          console.error('Error fetching files:', error);
        };
    }
  }),
  { name: 'fileStore',
    storage: createJSONStorage(() => localStorage),
  }
))