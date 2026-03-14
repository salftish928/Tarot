// 通义API Key (请在此处填写您的API Key)
const TONGYI_API_KEY = "sk-8d0fa59203724b9fa4a26a32e139d8ee";

// 塔罗牌数据 - 78张牌（大阿卡那22张 + 小阿卡那56张）
const tarotCards = [
    // 大阿卡那
    { name: "愚者", meaning: "新开始、冒险、自由、天真" },
    { name: "魔术师", meaning: "创造力、技能、意志力、计划的开始" },
    { name: "女祭司", meaning: "直觉、潜意识、神秘、内在知识" },
    { name: "女皇", meaning: "丰饶、母性、创造、关系" },
    { name: "皇帝", meaning: "权威、结构、领导力、稳定" },
    { name: "教皇", meaning: "传统、指导、精神、信仰" },
    { name: "恋人", meaning: "关系、选择、爱、和谐" },
    { name: "战车", meaning: "控制、胜利、意志力、方向" },
    { name: "力量", meaning: "勇气、力量、耐心、和谐" },
    { name: "隐者", meaning: "内省、智慧、孤独、指引" },
    { name: "命运之轮", meaning: "命运、转变、循环、机会" },
    { name: "正义", meaning: "公正、平衡、法律、真理" },
    { name: "倒吊人", meaning: "牺牲、视角、等待、转变" },
    { name: "死神", meaning: "结束、转变、重生、新开始" },
    { name: "节制", meaning: "平衡、调和、耐心、健康" },
    { name: "恶魔", meaning: "诱惑、欲望、束缚、物质" },
    { name: "高塔", meaning: "突然变化、危机、觉醒、释放" },
    { name: "星星", meaning: "希望、灵感、精神、指导" },
    { name: "月亮", meaning: "潜意识、情绪、幻觉、直觉" },
    { name: "太阳", meaning: "成功、快乐、活力、真相" },
    { name: "审判", meaning: "重生、评估、觉醒、决定" },
    { name: "世界", meaning: "完成、成就、旅行、和谐" },
    // 小阿卡那 - 权杖
    { name: "权杖 Ace", meaning: "新开始、创造力、激情" },
    { name: "权杖 2", meaning: "平衡、决定、计划" },
    { name: "权杖 3", meaning: "远见、合作、扩张" },
    { name: "权杖 4", meaning: "稳定、家庭、庆祝" },
    { name: "权杖 5", meaning: "冲突、竞争、挑战" },
    { name: "权杖 6", meaning: "胜利、成功、认可" },
    { name: "权杖 7", meaning: "坚持、防御、勇气" },
    { name: "权杖 8", meaning: "快速行动、旅行、进展" },
    { name: "权杖 9", meaning: "警惕、防御、准备" },
    { name: "权杖 10", meaning: "负担、责任、压力" },
    { name: "权杖侍从", meaning: "新想法、消息、好奇心" },
    { name: "权杖骑士", meaning: "行动、冒险、热情" },
    { name: "权杖王后", meaning: "创造力、热情、领导力" },
    { name: "权杖国王", meaning: "权威、领导力、行动力" },
    // 小阿卡那 - 圣杯
    { name: "圣杯 Ace", meaning: "新感情、爱、直觉" },
    { name: "圣杯 2", meaning: "合作、关系、平衡" },
    { name: "圣杯 3", meaning: "友谊、庆祝、社交" },
    { name: "圣杯 4", meaning: "不满、冷漠、选择" },
    { name: "圣杯 5", meaning: "损失、悲伤、失望" },
    { name: "圣杯 6", meaning: "礼物、慷慨、回忆" },
    { name: "圣杯 7", meaning: "幻想、选择、欲望" },
    { name: "圣杯 8", meaning: "离开、寻找、转变" },
    { name: "圣杯 9", meaning: "满足、快乐、成功" },
    { name: "圣杯 10", meaning: "幸福、家庭、和谐" },
    { name: "圣杯侍从", meaning: "情感、创造力、直觉" },
    { name: "圣杯骑士", meaning: "浪漫、敏感、关系" },
    { name: "圣杯王后", meaning: "爱、同情、直觉" },
    { name: "圣杯国王", meaning: "情感稳定、领导力、智慧" },
    // 小阿卡那 - 宝剑
    { name: "宝剑 Ace", meaning: "新想法、真相、突破" },
    { name: "宝剑 2", meaning: "平衡、决策、僵局" },
    { name: "宝剑 3", meaning: "悲伤、心碎、冲突" },
    { name: "宝剑 4", meaning: "休息、反思、撤退" },
    { name: "宝剑 5", meaning: "冲突、胜利、损失" },
    { name: "宝剑 6", meaning: "平静、过渡、旅行" },
    { name: "宝剑 7", meaning: "策略、欺骗、机智" },
    { name: "宝剑 8", meaning: "限制、恐惧、监禁" },
    { name: "宝剑 9", meaning: "焦虑、失眠、恐惧" },
    { name: "宝剑 10", meaning: "结束、痛苦、转变" },
    { name: "宝剑侍从", meaning: "消息、想法、学习" },
    { name: "宝剑骑士", meaning: "行动、思维、速度" },
    { name: "宝剑王后", meaning: "智慧、洞察力、公正" },
    { name: "宝剑国王", meaning: "权威、逻辑、真相" },
    // 小阿卡那 - 星币
    { name: "星币 Ace", meaning: "新机会、财富、物质" },
    { name: "星币 2", meaning: "平衡、适应、管理" },
    { name: "星币 3", meaning: "合作、技能、团队" },
    { name: "星币 4", meaning: "稳定、安全、占有" },
    { name: "星币 5", meaning: "贫困、困难、损失" },
    { name: "星币 6", meaning: "给予、分享、平衡" },
    { name: "星币 7", meaning: "投资、耐心、收获" },
    { name: "星币 8", meaning: "勤奋、技能、专注" },
    { name: "星币 9", meaning: "成功、独立、舒适" },
    { name: "星币 10", meaning: "财富、家庭、遗产" },
    { name: "星币侍从", meaning: "学习、技能、潜力" },
    { name: "星币骑士", meaning: "努力、责任、实践" },
    { name: "星币王后", meaning: "丰饶、母性、务实" },
    { name: "星币国王", meaning: "成功、权威、物质" }
];

// 文件名映射函数
function getCardFileName(cardName) {
    const nameMap = {
        "愚者": "0愚者",
        "魔术师": "1魔术师",
        "女祭司": "2女祭司",
        "女皇": "3皇后",
        "皇帝": "4皇帝",
        "教皇": "5教皇",
        "恋人": "6恋人",
        "战车": "7战车",
        "力量": "8力量",
        "隐者": "9隐士",
        "命运之轮": "10命运之轮",
        "正义": "11正义",
        "倒吊人": "12吊人",
        "死神": "13死神",
        "节制": "14节制",
        "恶魔": "15恶魔",
        "高塔": "16高塔",
        "星星": "17星星",
        "月亮": "18月亮",
        "太阳": "19太阳",
        "审判": "20审判",
        "世界": "21世界",
        "权杖 Ace": "权杖Ace",
        "权杖 2": "权杖2",
        "权杖 3": "权杖3",
        "权杖 4": "权杖4",
        "权杖 5": "权杖5",
        "权杖 6": "权杖6",
        "权杖 7": "权杖7",
        "权杖 8": "权杖8",
        "权杖 9": "权杖9",
        "权杖 10": "权杖10",
        "权杖侍从": "权杖侍从",
        "权杖骑士": "权杖骑士",
        "权杖王后": "权杖皇后",
        "权杖国王": "权杖国王",
        "圣杯 Ace": "圣杯Ace",
        "圣杯 2": "圣杯2",
        "圣杯 3": "圣杯3",
        "圣杯 4": "圣杯4",
        "圣杯 5": "圣杯5",
        "圣杯 6": "圣杯6",
        "圣杯 7": "圣杯7",
        "圣杯 8": "圣杯8",
        "圣杯 9": "圣杯9",
        "圣杯 10": "圣杯10",
        "圣杯侍从": "圣杯侍从",
        "圣杯骑士": "圣杯骑士",
        "圣杯王后": "圣杯皇后",
        "圣杯国王": "圣杯国王",
        "宝剑 Ace": "宝剑Ace",
        "宝剑 2": "宝剑2",
        "宝剑 3": "宝剑3",
        "宝剑 4": "宝剑4",
        "宝剑 5": "宝剑5",
        "宝剑 6": "宝剑6",
        "宝剑 7": "宝剑7",
        "宝剑 8": "宝剑8",
        "宝剑 9": "宝剑9",
        "宝剑 10": "宝剑10",
        "宝剑侍从": "宝剑侍从",
        "宝剑骑士": "宝剑骑士",
        "宝剑王后": "宝剑皇后",
        "宝剑国王": "宝剑国王",
        "星币 Ace": "星币Ace",
        "星币 2": "星币2",
        "星币 3": "星币3",
        "星币 4": "星币4",
        "星币 5": "星币5",
        "星币 6": "星币6",
        "星币 7": "星币7",
        "星币 8": "星币8",
        "星币 9": "星币9",
        "星币 10": "星币10",
        "星币侍从": "星币侍从",
        "星币骑士": "星币骑士",
        "星币王后": "星币皇后",
        "星币国王": "星币国王"
    };
    return nameMap[cardName] || cardName.replace(/\s+/g, '');
}

// 全局变量
let deck = [];
let drawnCards = [];
let isShuffled = false;
let isAnimating = false;
let currentTheme = 'gold';

// 主题颜色方案
const themes = {
    gold: {
        primary: '#d4af37',
        secondary: '#1a1a1a',
        accent: '#2d2d2d',
        text: '#d4af37',
        textSecondary: '#ccc'
    },
    blue: {
        primary: '#3498db',
        secondary: '#0a192f',
        accent: '#172a45',
        text: '#3498db',
        textSecondary: '#a8b2d1'
    },
    red: {
        primary: '#e74c3c',
        secondary: '#2c1810',
        accent: '#4a2418',
        text: '#e74c3c',
        textSecondary: '#d5a690'
    },
    green: {
        primary: '#27ae60',
        secondary: '#0f2e1a',
        accent: '#1a472e',
        text: '#27ae60',
        textSecondary: '#a0c4a5'
    }
};

// 将十六进制颜色转换为RGB格式
function hexToRgb(hex) {
    // 移除#号
    hex = hex.replace('#', '');
    
    // 解析RGB值
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
}

// DOM元素
const shuffleBtn = document.getElementById('shuffleBtn');
const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const deckArea = document.getElementById('deckArea');
const cardArea = document.getElementById('cardArea');
const interpretation = document.getElementById('interpretation');
const userQuestionInput = document.getElementById('userQuestion');
const aiInterpretBtn = document.getElementById('aiInterpretBtn');
const aiInterpretation = document.getElementById('aiInterpretation');
const themeSelect = document.getElementById('themeSelect');

// 初始化
function init() {
    deck = [];
    drawnCards = [];
    isShuffled = false;
    updateUI();
    createDeck();
    applyTheme(currentTheme);
}

// 应用主题
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    currentTheme = themeName;
    
    // 更新CSS变量
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--text-secondary-color', theme.textSecondary);
    
    // 更新背景
    document.body.style.backgroundColor = theme.secondary;
    document.body.style.color = theme.text;
    
    // 更新鼠标跟随效果的颜色
    document.body.style.setProperty('--mouse-glow-color', `rgba(${hexToRgb(theme.primary)}, 0.1)`);
    
    // 更新容器
    const container = document.querySelector('.container');
    if (container) {
        container.style.color = theme.text;
    }
    
    // 更新标题
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.style.color = theme.primary;
    }
    
    // 更新按钮
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.background = `linear-gradient(135deg, ${theme.secondary}, ${theme.accent})`;
        button.style.color = theme.primary;
        button.style.borderColor = theme.primary;
    });
    
    // 更新输入框
    const input = document.getElementById('userQuestion');
    if (input) {
        input.style.background = theme.secondary;
        input.style.color = theme.primary;
        input.style.borderColor = theme.primary;
    }
    
    // 更新主题选择器
    const themeSelector = document.querySelector('.theme-selector');
    if (themeSelector) {
        themeSelector.style.color = theme.primary;
    }
    
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.style.background = theme.secondary;
        themeSelect.style.color = theme.primary;
        themeSelect.style.borderColor = theme.primary;
    }
    
    // 更新解读区域
    const interpretationAreas = document.querySelectorAll('.interpretation, .ai-interpretation');
    interpretationAreas.forEach(area => {
        area.style.background = `linear-gradient(135deg, ${theme.accent}, ${theme.secondary})`;
        area.style.borderColor = theme.primary;
    });
    
    // 重新创建牌组以应用新主题
    createDeck();
    
    // 更新卡牌
    updateUI();
}

// 用于更新牌组样式的style元素
let deckStyleElement = null;

// 创建牌组
function createDeck() {
    deckArea.innerHTML = '';
    const deckElement = document.createElement('div');
    deckElement.className = 'deck';
    
    const theme = themes[currentTheme];
    
    // 更新或创建牌组样式元素
    if (!deckStyleElement) {
        deckStyleElement = document.createElement('style');
        deckStyleElement.id = 'deck-theme-styles';
        document.head.appendChild(deckStyleElement);
    }
    
    // 更新牌组样式
    deckStyleElement.textContent = `
        .deck-card {
            background: linear-gradient(135deg, ${theme.secondary}, ${theme.accent}) !important;
            border-color: ${theme.primary} !important;
        }
        .deck-card::before {
            border-color: ${theme.primary} !important;
            background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 50%, ${theme.secondary} 100%) !important;
        }
        .deck-card::after {
            color: ${theme.primary} !important;
            text-shadow: 0 0 10px rgba(${hexToRgb(theme.primary)}, 0.8), 0 0 20px rgba(${hexToRgb(theme.primary)}, 0.5) !important;
        }
    `;
    
    // 创建牌组堆叠效果
    for (let i = 0; i < 5; i++) {
        const cardElement = document.createElement('div');
        cardElement.className = 'deck-card';
        cardElement.style.zIndex = 5 - i;
        cardElement.style.transform = `translateY(${i * 5}px) rotate(${i * 0.5}deg)`;
        
        deckElement.appendChild(cardElement);
    }
    
    deckArea.appendChild(deckElement);
}

// 更新UI
function updateUI() {
    drawBtn.disabled = !isShuffled || deck.length === 0;
    // 只有在抽到牌后才启用AI解读按钮
    aiInterpretBtn.disabled = drawnCards.length === 0;
    cardArea.innerHTML = '';
    interpretation.innerHTML = '';
    
    drawnCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardArea.appendChild(cardElement);
    });
}

// 创建卡片元素
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `card ${card.reversed ? 'reversed' : ''}`;
    
    const theme = themes[currentTheme];
    
    // 使用本地压缩图片路径
    const fileName = getCardFileName(card.name);
    const imageUrl = `images/tarot_cards_compressed/${fileName}.png`;
    
    cardDiv.innerHTML = `
        <div class="card-front">
            <img src="${imageUrl}" alt="${card.name}" ${card.reversed ? 'style="transform: rotate(180deg);"' : ''}>
            <div class="card-title">${card.name} ${card.reversed ? '(逆位)' : '(正位)'}</div>
            <div class="card-meaning">${card.meaning}</div>
        </div>
        <div class="card-back">
            <div class="inner-circle"></div>
            <div class="star">✦</div>
            <div class="star">✦</div>
            <div class="star">✦</div>
            <div class="star">✦</div>
            <div class="star">✧</div>
            <div class="star">✧</div>
            <div class="star">✧</div>
            <div class="star">✧</div>
        </div>
    `;
    
    // 设置卡牌样式
    const cardFront = cardDiv.querySelector('.card-front');
    const cardBack = cardDiv.querySelector('.card-back');
    const cardTitle = cardDiv.querySelector('.card-title');
    const cardMeaning = cardDiv.querySelector('.card-meaning');
    const stars = cardDiv.querySelectorAll('.star');
    const innerCircle = cardDiv.querySelector('.inner-circle');
    
    if (cardFront) {
        cardFront.style.background = `linear-gradient(135deg, ${theme.accent}, ${theme.secondary})`;
        cardFront.style.color = theme.text;
        cardFront.style.borderColor = theme.primary;
    }
    
    if (cardBack) {
        cardBack.style.background = `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 50%, ${theme.secondary} 100%)`;
        cardBack.style.borderColor = theme.primary;
    }
    
    if (cardTitle) {
        cardTitle.style.color = theme.primary;
    }
    
    if (cardMeaning) {
        cardMeaning.style.color = theme.textSecondary;
    }
    
    if (stars) {
        stars.forEach(star => {
            star.style.color = theme.primary;
            star.style.textShadow = `0 0 5px rgba(${hexToRgb(theme.primary)}, 0.8)`;
        });
    }
    
    if (innerCircle) {
        innerCircle.style.borderColor = theme.primary;
    }
    
    // 添加点击事件
    cardDiv.addEventListener('click', function() {
        if (isAnimating) return;
        
        const isFlipped = this.classList.contains('flipped');
        
        if (isFlipped) {
            // 已经翻转，点击显示解牌
            showInterpretation(card);
        } else {
            // 未翻转，执行翻转动画
            isAnimating = true;
            gsap.to(this, {
                duration: 0.6,
                rotateY: 180,
                ease: 'power2.inOut',
                onComplete: () => {
                    this.classList.add('flipped');
                    card.flipped = true;
                    showInterpretation(card);
                    isAnimating = false;
                }
            });
        }
    });
    
    return cardDiv;
}

// 洗牌
function shuffleDeck() {
    if (isAnimating) return;
    
    isAnimating = true;
    shuffleBtn.disabled = true;
    drawBtn.disabled = true;
    
    // 重置牌组
    deck = tarotCards.map(card => ({
        ...card,
        reversed: Math.random() > 0.5 // 50%概率逆位
    }));
    
    // 优化的洗牌算法
    const n = deck.length;
    for (let i = 0; i < n - 1; i++) {
        const j = i + Math.floor(Math.random() * (n - i));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    // 缩短洗牌动画时间
    const deckElement = deckArea.querySelector('.deck');
    gsap.to(deckElement, {
        duration: 0.3,
        scale: 1.1,
        y: -10,
        ease: 'back.out(1.5)',
        onComplete: () => {
            gsap.to(deckElement, {
                duration: 0.2,
                scale: 1,
                y: 0,
                ease: 'power2.out',
                onComplete: () => {
                    isShuffled = true;
                    isAnimating = false;
                    updateUI();
                    shuffleBtn.disabled = false;
                    showMessage('牌已洗好，可以开始抽牌了！');
                }
            });
        }
    });
}

// 抽牌
function drawCard() {
    if (isAnimating || deck.length === 0) {
        if (deck.length === 0) {
            showMessage('牌已抽完！');
        }
        return;
    }
    
    isAnimating = true;
    drawBtn.disabled = true;
    
    // 从牌组中抽取一张牌
    const card = deck.pop();
    drawnCards.push(card);
    
    // 创建抽牌动画
    const deckElement = deckArea.querySelector('.deck');
    
    // 牌组的弹动效果
    gsap.to(deckElement, {
        duration: 0.15,
        scale: 0.95,
        y: -5,
        ease: 'power2.in',
        onComplete: () => {
            gsap.to(deckElement, {
                duration: 0.15,
                scale: 1,
                y: 0,
                ease: 'power2.out',
                onComplete: () => {
                    updateUI();
                    
                    // 牌面展开动画（不自动翻牌）
                    setTimeout(() => {
                        const lastCard = cardArea.lastChild;
                        if (lastCard) {
                            gsap.fromTo(lastCard, 
                                { x: -100, y: 50, rotate: -20, scale: 0.8, opacity: 0 },
                                { 
                                    x: 0, 
                                    y: 0, 
                                    rotate: 0, 
                                    scale: 1, 
                                    opacity: 1, 
                                    duration: 0.6, 
                                    ease: 'back.out(1.7)',
                                    onComplete: () => {
                                        isAnimating = false;
                                        drawBtn.disabled = deck.length === 0;
                                    }
                                }
                            );
                        }
                    }, 100);
                }
            });
        }
    });
}

// 显示解牌
function showInterpretation(card) {
    const interpretationText = getDetailedInterpretation(card.name, card.reversed);
    interpretation.innerHTML = `
        <h2>牌面解析</h2>
        <p><strong>牌名：</strong>${card.name} ${card.reversed ? '(逆位)' : '(正位)'}</p>
        <p><strong>含义：</strong>${card.meaning}</p>
        <p><strong>解读：</strong>${interpretationText}</p>
    `;
}

// 详细解牌（支持正逆位）
function getDetailedInterpretation(cardName, reversed) {
    const interpretations = {
        "愚者": {
            upright: "愚者代表新的开始、冒险和自由。它暗示你正站在一个新旅程的起点，充满希望和可能性。这是一个勇敢迈出步伐、相信直觉的好时机。",
            reversed: "愚者逆位可能表示鲁莽、不负责任或错过机会。你可能需要更加谨慎地评估风险，避免冲动行事。"
        },
        "魔术师": {
            upright: "魔术师代表创造力和技能的运用。它暗示你有能力实现你的目标，只要你集中精力并利用你所拥有的资源。这是一个开始新项目或计划的好时机。",
            reversed: "魔术师逆位可能表示创造力受阻，或技能未被充分利用。你可能感到缺乏方向或自信，需要重新评估你的计划和资源。"
        },
        "女祭司": {
            upright: "女祭司代表直觉和潜意识。它建议你倾听内心的声音，相信你的直觉。这个牌面也可能暗示你需要更多地了解自己的内在世界。",
            reversed: "女祭司逆位可能表示直觉被忽略，或潜意识的恐惧和疑虑浮现。你可能需要更理性地分析情况，而不是完全依赖直觉。"
        },
        "女皇": {
            upright: "女皇代表丰饶和母性。它暗示一段关系的发展、创造力的表达或物质上的丰收。这是一个关于成长和繁荣的积极信号。",
            reversed: "女皇逆位可能表示创造力受阻，或关系中的不平衡。你可能需要关注自我照顾，或重新评估你的创造性表达。"
        },
        "皇帝": {
            upright: "皇帝代表权威和结构。它暗示你需要采取更有组织、更有纪律的方法来实现你的目标。这个牌面也可能代表一个父亲形象或权威人物。",
            reversed: "皇帝逆位可能表示权威被滥用，或缺乏结构和纪律。你可能需要重新评估你的领导方式，或建立更健康的界限。"
        },
        "教皇": {
            upright: "教皇代表传统和精神指导。它暗示你需要寻求指导或遵循既定的规则和传统。这个牌面也可能代表教育、信仰或精神成长。",
            reversed: "教皇逆位可能表示对传统的质疑，或精神上的困惑。你可能需要寻找自己的精神道路，而不是盲目跟随他人。"
        },
        "恋人": {
            upright: "恋人代表关系和选择。它暗示一段重要的关系或一个需要你做出的重要选择。这个牌面强调了和谐、爱与合作的重要性。",
            reversed: "恋人逆位可能表示关系中的冲突，或选择的困难。你可能需要重新评估你的关系，或做出更明智的选择。"
        },
        "战车": {
            upright: "战车代表控制和胜利。它暗示你需要集中你的意志力，克服障碍，朝着你的目标前进。这个牌面也代表自信和决心。",
            reversed: "战车逆位可能表示缺乏控制，或目标不明确。你可能需要重新评估你的方向，或找到更有效的方法来实现你的目标。"
        },
        "力量": {
            upright: "力量代表勇气和耐心。它暗示你有能力通过爱和理解而不是暴力来克服挑战。这个牌面强调了内在力量和自我控制的重要性。",
            reversed: "力量逆位可能表示缺乏勇气，或自我控制不足。你可能需要面对你的恐惧，或找到更健康的方式来处理挑战。"
        },
        "隐者": {
            upright: "隐者代表内省和智慧。它暗示你需要花时间独处，反思你的生活和目标。这个牌面也可能代表寻求指导或寻找答案。",
            reversed: "隐者逆位可能表示过度孤独，或缺乏自我反思。你可能需要与他人交流，或更积极地参与生活。"
        },
        "命运之轮": {
            upright: "命运之轮代表命运和转变。它暗示生活中的变化和循环，以及机会的到来。这个牌面提醒你，生活是不断变化的，你需要适应这些变化。",
            reversed: "命运之轮逆位可能表示变化受阻，或机会错过。你可能需要更积极地适应变化，或寻找新的机会。"
        },
        "正义": {
            upright: "正义代表公正和平衡。它暗示你需要做出公平的决定，或面对你行为的后果。这个牌面也可能代表法律事务或道德问题。",
            reversed: "正义逆位可能表示不公正，或平衡被打破。你可能需要重新评估你的行为，或寻求更公平的解决方案。"
        },
        "倒吊人": {
            upright: "倒吊人代表牺牲和视角。它暗示你需要从不同的角度看待问题，或做出一些牺牲来获得更大的利益。这个牌面也可能代表等待和耐心。",
            reversed: "倒吊人逆位可能表示不必要的牺牲，或视角受限。你可能需要重新评估你的牺牲是否值得，或寻找新的角度来看待问题。"
        },
        "死神": {
            upright: "死神代表结束和转变。它暗示一个阶段的结束和另一个阶段的开始。这个牌面不是关于身体上的死亡，而是关于转变和重生。",
            reversed: "死神逆位可能表示结束受阻，或转变困难。你可能需要接受结束的必然性，或更积极地面对转变。"
        },
        "节制": {
            upright: "节制代表平衡和调和。它暗示你需要在生活的不同方面找到平衡，或调和不同的观点。这个牌面也可能代表健康和和谐。",
            reversed: "节制逆位可能表示平衡被打破，或调和困难。你可能需要重新评估你的生活平衡，或寻找更有效的方法来调和不同的观点。"
        },
        "恶魔": {
            upright: "恶魔代表诱惑和束缚。它暗示你可能被物质欲望或不良习惯所束缚。这个牌面提醒你要警惕诱惑，保持自我控制。",
            reversed: "恶魔逆位可能表示摆脱束缚，或战胜诱惑。你可能需要重新评估你的价值观，或找到更健康的生活方式。"
        },
        "高塔": {
            upright: "高塔代表突然变化和危机。它暗示一个突然的、可能令人震惊的变化，这将打破旧的结构，为新的开始让路。这个牌面提醒你要适应变化，而不是抵抗它。",
            reversed: "高塔逆位可能表示变化被延迟，或危机被避免。你可能需要主动寻求变化，或为可能的危机做准备。"
        },
        "星星": {
            upright: "星星代表希望和灵感。它暗示一个充满希望的未来，以及灵感和创造力的流动。这个牌面是一个积极的信号，表明你的梦想正在实现的道路上。",
            reversed: "星星逆位可能表示希望破灭，或灵感枯竭。你可能需要重新点燃你的希望，或寻找新的灵感来源。"
        },
        "月亮": {
            upright: "月亮代表潜意识和情绪。它暗示你可能正在经历情绪波动或不确定性。这个牌面提醒你要相信你的直觉，同时保持清醒的头脑。",
            reversed: "月亮逆位可能表示情绪混乱，或直觉被误导。你可能需要更理性地分析情况，或寻求清晰和稳定。"
        },
        "太阳": {
            upright: "太阳代表成功和快乐。它暗示一个充满活力、快乐和成功的时期。这个牌面是一个非常积极的信号，表明你正走在正确的道路上。",
            reversed: "太阳逆位可能表示成功受阻，或快乐减少。你可能需要重新评估你的目标，或寻找新的快乐来源。"
        },
        "审判": {
            upright: "审判代表重生和评估。它暗示一个自我评估的时期，以及一个新的开始。这个牌面提醒你要对自己的行为负责，并准备好迎接新的机会。",
            reversed: "审判逆位可能表示自我评估不足，或新的开始受阻。你可能需要更深入地反思你的行为，或为新的开始做准备。"
        },
        "世界": {
            upright: "世界代表完成和成就。它暗示一个项目或阶段的完成，以及成功和满足。这个牌面是一个积极的信号，表明你已经实现了你的目标，或即将实现它们。",
            reversed: "世界逆位可能表示完成受阻，或成就未被认可。你可能需要重新评估你的目标，或寻找新的完成方式。"
        }
    };
    
    // 对于小阿卡那牌，提供通用解读
    if (interpretations[cardName]) {
        return reversed ? interpretations[cardName].reversed : interpretations[cardName].upright;
    } else {
        return reversed ? 
            "这张牌逆位表示其基本含义的挑战或阻碍，需要你重新评估相关领域的情况。" : 
            "这张牌代表了生活中的一个重要方面，需要你仔细思考它在你当前情况下的意义。";
    }
}

// 显示消息
function showMessage(message) {
    interpretation.innerHTML = `<p>${message}</p>`;
}

// AI解读功能
function startAIInterpretation() {
    const userQuestion = userQuestionInput.value.trim();
    if (!userQuestion) {
        alert('请输入您的问题');
        return;
    }
    
    if (!TONGYI_API_KEY) {
        alert('请先在代码中填写您的通义API Key');
        return;
    }
    
    // 防重复点击
    aiInterpretBtn.disabled = true;
    aiInterpretBtn.textContent = '解读中...';
    
    // 显示加载状态
    aiInterpretation.innerHTML = `
        <h2>AI解读</h2>
        <div class="loading">解读中，请稍候...</div>
    `;
    
    // 准备请求数据
    const cardsInfo = drawnCards.map((card, index) => {
        return `${index + 1}: ${card.name} ${card.reversed ? '(逆位)' : '(正位)'}`;
    }).join('\n');
    
    const messages = [
        {
            role: "system",
            content: "你是专业塔罗解读师，根据牌面、正逆位和问题给出温和、理性、有建设性的解读，不迷信、不恐吓，结构清晰：整体感受 + 现状分析 + 建议 + 结果展望"
        },
        {
            role: "user",
            content: `问题：${userQuestion}\n\n抽到的牌：\n${cardsInfo}`
        }
    ];
    
    // 调用通义API兼容模式
    fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TONGYI_API_KEY}`
        },
        body: JSON.stringify({
            model: "deepseek-v3.2", // 标准模型名称
            messages: messages,
            temperature: 0.7,
            max_tokens: 1000
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(`API请求失败: ${response.status} - ${errorData.message || '未知错误'}`);
            }).catch(() => {
                throw new Error(`API请求失败: ${response.status}`);
            });
        }
        return response.json();
    })
    .then(data => {
        if (data.choices && data.choices.length > 0) {
            const interpretationText = data.choices[0].message.content;
            // 支持markdown显示
            const markdownContent = interpretationText
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/gim, '<em>$1</em>')
                .replace(/\n/g, '<br>');
            
            aiInterpretation.innerHTML = `
                <h2>AI解读</h2>
                <div class="interpretation-content">${markdownContent}</div>
            `;
        } else {
            throw new Error('API返回格式错误');
        }
    })
    .catch(error => {
        console.error('解读失败:', error);
        let errorMessage = error.message;
        if (errorMessage === 'Failed to fetch') {
            errorMessage = '网络请求失败，请检查网络连接或API地址是否正确';
        }
        aiInterpretation.innerHTML = `
            <h2>AI解读</h2>
            <div class="error">解读失败，请稍后重试。错误信息：${errorMessage}</div>
        `;
    })
    .finally(() => {
        // 恢复按钮状态
        aiInterpretBtn.disabled = drawnCards.length === 0;
        aiInterpretBtn.textContent = '开始解读';
    });
}

// 重置
function reset() {
    init();
    showMessage('已重置，请先洗牌再抽牌！');
}

// 鼠标移动背景效果
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
});

// 事件监听器
shuffleBtn.addEventListener('click', shuffleDeck);
drawBtn.addEventListener('click', drawCard);
resetBtn.addEventListener('click', reset);
aiInterpretBtn.addEventListener('click', startAIInterpretation);
themeSelect.addEventListener('change', function() {
    applyTheme(this.value);
});

// 初始化应用
init();
showMessage('欢迎使用塔罗牌占卜，请先洗牌再抽牌！');