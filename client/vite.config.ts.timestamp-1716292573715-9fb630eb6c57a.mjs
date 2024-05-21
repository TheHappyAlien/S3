// vite.config.ts
import { defineConfig } from "file:///C:/Users/olekm/Downloads/AWS-File-Uploader-main/AWS-File-Uploader-main/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/olekm/Downloads/AWS-File-Uploader-main/AWS-File-Uploader-main/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  preview: {
    port: 81,
    strictPort: true,
    host: "0.0.0.0",
    cors: true,
    proxy: {
      "/api": {
        target: "http://server:8080",
        // target: 'ws://localhost:8080',
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxvbGVrbVxcXFxEb3dubG9hZHNcXFxcQVdTLUZpbGUtVXBsb2FkZXItbWFpblxcXFxBV1MtRmlsZS1VcGxvYWRlci1tYWluXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcb2xla21cXFxcRG93bmxvYWRzXFxcXEFXUy1GaWxlLVVwbG9hZGVyLW1haW5cXFxcQVdTLUZpbGUtVXBsb2FkZXItbWFpblxcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL29sZWttL0Rvd25sb2Fkcy9BV1MtRmlsZS1VcGxvYWRlci1tYWluL0FXUy1GaWxlLVVwbG9hZGVyLW1haW4vY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDgxLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgaG9zdDonMC4wLjAuMCcsXG4gICAgY29yczogdHJ1ZSxcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9zZXJ2ZXI6ODA4MCcsXG4gICAgICAgIC8vIHRhcmdldDogJ3dzOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICBzZWN1cmU6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWEsU0FBUyxvQkFBb0I7QUFDcGMsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQSxRQUVSLElBQUk7QUFBQSxRQUNKLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
