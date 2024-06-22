import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axiosInstance from '../../axiosConfig';
import FileDto from '../store/dto/File.dto';

export interface FileStore {
  files: FileDto[];
  fetchFiles: () => void;
  updateFileName: (id: number, newName: string) => void;
  deleteFile: (id: number) => void;
  uploadFile: (file: any) => void;
  downloadFile: (id: number) => Promise<void>;
}

export const UseFileStore = create<FileStore>()(
  persist((set, get) => ({
    files: [],
    fetchFiles: async () => {
        try {
          const response = await axiosInstance.get<FileDto[]>('/api');
          set({files: response.data});
        } catch (error) {
          console.error('Error fetching files:', error);
        };
    },
    updateFileName: async (id: number, newName: string) => {
      try {
        await axiosInstance.post(`/api/update?id=${id}&newFileName=${encodeURIComponent(newName)}`);
        get().fetchFiles();
      } catch (error) {
        console.error('Error updating file name:', error);
      };
    },
    deleteFile: async (id: number) => {
      try {
        await axiosInstance.post(`/api/delete/${id}`);
        get().fetchFiles();
      } catch (error) {
        console.error('Error deleting file:', error);
      };
    },
    uploadFile: async (file: Blob) => {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        await axiosInstance.post('/api/saveFile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        get().fetchFiles();
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
    downloadFile: async (id) => {
      try {
        const response = await axiosInstance.get(`/api/download/${id}`, {
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        const file = get().files.find((f) => f.id === id);
        link.setAttribute("download", file ? file.name : "download");
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (error) {
        console.error("Failed to download file:", error);
      }
    },
  }),
  { name: 'fileStore',
    storage: createJSONStorage(() => localStorage),
  }
))