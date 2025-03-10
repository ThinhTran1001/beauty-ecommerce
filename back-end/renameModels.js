const fs = require("fs");
const path = require("path");

const modelsDir = path.join(__dirname, "model");

const renameFiles = () => {
    fs.readdir(modelsDir, (err, files) => {
        if (err) {
            console.error("Lỗi đọc thư mục:", err);
            return;
        }

        files.forEach((file) => {
            const oldPath = path.join(modelsDir, file);
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);

            // Chuyển đổi sang camelCase + .model.js
            const newName = baseName.charAt(0).toLowerCase() + baseName.slice(1) + ".model" + ext;
            const newPath = path.join(modelsDir, newName);

            if (oldPath !== newPath) {
                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        console.error(`Lỗi đổi tên ${file}:`, err);
                    } else {
                        console.log(`Đã đổi: ${file} → ${newName}`);
                    }
                });
            }
        });
    });
};

renameFiles();
