import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ Đổi <tên-repo> thành đúng tên repo của bạn
export default defineConfig({
  plugins: [react()],
  base: "/DoAnCuoiKi/",
});
