# 塔罗牌占卜应用

## 文件结构

```
tarot/
├── index.html              # 主页面
├── style.css               # 样式文件
├── script.js              # 脚本文件
├── README.md              # 本说明文件
└── images/                # 图片文件夹
    └── tarot_cards/       # 塔罗牌图片文件夹
        ├── 魔术师.jpg
        ├── 女祭司.jpg
        ├── 女皇.jpg
        ├── ... (共78张图片)
```

## 功能说明

1. **抽牌功能**：支持连续抽取塔罗牌，直到78张全部抽完
2. **正逆位**：每张牌有50%概率出现正位或逆位
3. **主题切换**：支持四种主题（黑金、蓝金、红金、绿金）
4. **AI解读**：集成通义API进行AI解牌
5. **图片下载**：提供下载图片功能（需配合后端服务使用）

## 使用方法

### 1. 准备图片

由于浏览器安全限制，无法直接从网页下载图片到本地文件夹。有两种方式：

#### 方式一：使用Node.js下载脚本（推荐）

1. 确保已安装Node.js
2. 创建 `download_images.js` 文件（代码见下方）
3. 运行命令：
   ```bash
   node download_images.js
   ```
4. 图片将自动保存到 `images/tarot_cards/` 文件夹

#### 方式二：手动下载

1. 点击页面上的"下载图片"按钮
2. 逐个右键保存图片
3. 将图片命名为对应名称（如：魔术师.jpg）
4. 放置到 `images/tarot_cards/` 文件夹

### 2. 配置API Key（可选）

如需使用AI解读功能，请在 `script.js` 中填写您的通义API Key：

```javascript
const TONGYI_API_KEY = "您的API Key";
```

### 3. 运行应用

1. 使用本地服务器打开 `index.html`
2. 或使用Python运行：
   ```bash
   python -m http.server 8000
   ```
3. 在浏览器中访问 `http://localhost:8000`

## Node.js 下载脚本

创建 `download_images.js` 文件：

```javascript
const fs = require('fs');
const path = require('path');
const https = require('https');

// 塔罗牌数据
const tarotCards = [
    { name: "魔术师" },
    { name: "女祭司" },
    { name: "女皇" },
    { name: "皇帝" },
    { name: "教皇" },
    { name: "恋人" },
    { name: "战车" },
    { name: "力量" },
    { name: "隐者" },
    { name: "命运之轮" },
    { name: "正义" },
    { name: "倒吊人" },
    { name: "死神" },
    { name: "节制" },
    { name: "恶魔" },
    { name: "高塔" },
    { name: "星星" },
    { name: "月亮" },
    { name: "太阳" },
    { name: "审判" },
    { name: "世界" },
    { name: "权杖 Ace" },
    { name: "权杖 2" },
    { name: "权杖 3" },
    { name: "权杖 4" },
    { name: "权杖 5" },
    { name: "权杖 6" },
    { name: "权杖 7" },
    { name: "权杖 8" },
    { name: "权杖 9" },
    { name: "权杖 10" },
    { name: "权杖侍从" },
    { name: "权杖骑士" },
    { name: "权杖王后" },
    { name: "权杖国王" },
    { name: "圣杯 Ace" },
    { name: "圣杯 2" },
    { name: "圣杯 3" },
    { name: "圣杯 4" },
    { name: "圣杯 5" },
    { name: "圣杯 6" },
    { name: "圣杯 7" },
    { name: "圣杯 8" },
    { name: "圣杯 9" },
    { name: "圣杯 10" },
    { name: "圣杯侍从" },
    { name: "圣杯骑士" },
    { name: "圣杯王后" },
    { name: "圣杯国王" },
    { name: "宝剑 Ace" },
    { name: "宝剑 2" },
    { name: "宝剑 3" },
    { name: "宝剑 4" },
    { name: "宝剑 5" },
    { name: "宝剑 6" },
    { name: "宝剑 7" },
    { name: "宝剑 8" },
    { name: "宝剑 9" },
    { name: "宝剑 10" },
    { name: "宝剑侍从" },
    { name: "宝剑骑士" },
    { name: "宝剑王后" },
    { name: "宝剑国王" },
    { name: "星币 Ace" },
    { name: "星币 2" },
    { name: "星币 3" },
    { name: "星币 4" },
    { name: "星币 5" },
    { name: "星币 6" },
    { name: "星币 7" },
    { name: "星币 8" },
    { name: "星币 9" },
    { name: "星币 10" },
    { name: "星币侍从" },
    { name: "星币骑士" },
    { name: "星币王后" },
    { name: "星币国王" }
];

// 创建文件夹
const imagesDir = path.join(__dirname, 'images', 'tarot_cards');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// 下载图片函数
async function downloadImage(cardName, index, total) {
    const fileName = cardName.replace(/\s+/g, '_') + '.jpg';
    const filePath = path.join(imagesDir, fileName);
    
    // 如果文件已存在，跳过
    if (fs.existsSync(filePath)) {
        console.log(`[${index + 1}/${total}] ${cardName} 已存在，跳过`);
        return;
    }
    
    const themeColors = 'gold and black';
    const imagePrompt = `tarot card ${cardName}, detailed illustration, traditional tarot art style, ${themeColors}`;
    const imageUrl = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(imagePrompt)}&image_size=portrait_4_3`;
    
    return new Promise((resolve, reject) => {
        https.get(imageUrl, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}`));
                return;
            }
            
            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);
            
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`[${index + 1}/${total}] ${cardName} 下载完成`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => {});
            reject(err);
        });
    });
}

// 主函数
async function main() {
    console.log('开始下载塔罗牌图片...');
    console.log(`总共 ${tarotCards.length} 张图片\n`);
    
    let successCount = 0;
    let failCount = 0;
    
    for (let i = 0; i < tarotCards.length; i++) {
        try {
            await downloadImage(tarotCards[i].name, i, tarotCards.length);
            successCount++;
            // 添加延迟避免请求过快
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`[${i + 1}/${tarotCards.length}] ${tarotCards[i].name} 下载失败:`, error.message);
            failCount++;
        }
    }
    
    console.log(`\n下载完成！成功: ${successCount}, 失败: ${failCount}`);
}

main().catch(console.error);
```

## 图片命名规则

图片文件命名需遵循以下规则：
- 将牌名中的空格替换为下划线
- 使用 `.jpg` 扩展名
- 例如：
  - "魔术师" → "魔术师.jpg"
  - "权杖 Ace" → "权杖_Ace.jpg"
  - "圣杯 10" → "圣杯_10.jpg"

## 注意事项

1. **所有原有功能保持不变**：抽牌、正逆位、用户输入问题等逻辑完全不变
2. **图片路径**：代码已修改为从 `images/tarot_cards/` 文件夹读取本地图片
3. **浏览器限制**：纯前端无法直接保存文件到本地指定文件夹，需使用后端方案
4. **主题适配**：图片已根据主题颜色风格生成，切换主题时会重新加载对应风格的图片

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP (动画库)

## 许可证

本项目仅供学习和个人使用。
