import { App, Modal, Notice, Plugin} from 'obsidian';
export default class ImgToMdPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'convert-img-to-md',
            name: 'Convert img tags to Markdown for current file',
            callback: () => this.convertImgToMd(),
        });
		this.addCommand({
            id: 'convert-img-to-md-all',
            name: 'Convert img tags to Markdown for all files',
            callback: () => this.convertImgToMd4All(),
		})
    }

	async convertImgToMd() {
	    const file = this.app.workspace.getActiveFile();
	    if (file != null) {
			const content = await this.app.vault.read(file);  // 读取文件内容

			// 替换 img 标签为 Markdown 图片语法
			const newContent = content.replace(/<img\s+src="([^"]+)"\s+alt="([^"]+)"(?:\s+style="([^"]+)")?[^>]*\/?>/g, (match, src, alt) => {
				return `![${alt}](${src})`;
			});
			// 保存更新后的文件内容
			if (content !== newContent) {
				await this.app.vault.modify(file, newContent);
				console.log(`Updated: ${file.path}`);
			}
	    }else {
	        Notice.call("未选中文件，请先选中一个文件并打开编辑器")
	    }
	}

    async convertImgToMd4All() {
        const files = this.app.vault.getFiles();  // 获取所有文件
        for (let file of files) {
            if (file.extension === 'md') {  // 只处理 Markdown 文件
                const content = await this.app.vault.read(file);  // 读取文件内容

                // 替换 img 标签为 Markdown 图片语法
                const newContent = content.replace(/<img\s+src="([^"]+)"\s+alt="([^"]+)"(?:\s+style="([^"]+)")?[^>]*\/?>/g, (match, src, alt) => {
					return `![${alt}](${src})`;
				});
                // 保存更新后的文件内容
                if (content !== newContent) {
                    await this.app.vault.modify(file, newContent);
                    console.log(`Updated: ${file.path}`);
                }
            }
        }
    }
}

