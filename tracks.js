const tracks=[
  {icon:'⌘',name:'经典算法',tone:'green',goal:'建立可迁移的解题套路',items:['数组与哈希','双指针与滑动窗口','栈、队列与单调栈','链表与递归','二叉树 DFS / BFS','堆与优先队列','二分与排序','回溯与剪枝','图搜索与并查集','动态规划'],next:'合并区间、岛屿数量、零钱兑换、LRU 缓存'},
  {icon:'◒',name:'深度学习',tone:'blue',goal:'从张量操作写到训练循环',items:['Tensor 与广播','线性回归与梯度下降','反向传播','Dataset / DataLoader','PyTorch 训练循环','注意力机制','Transformer Block','过拟合与评估'],next:'手写 MLP、实现 mini-batch、补全 scaled dot-product attention'},
  {icon:'✦',name:'大模型',tone:'purple',goal:'理解并实现 LLM 的关键组件',items:['Tokenizer 与词表','Embedding 查表','Self-Attention','KV Cache','采样与 Temperature','LoRA 思路','RAG 检索流程','评测与幻觉分析'],next:'实现 top-k sampling、补全一个最小 RAG pipeline'},
  {icon:'↗',name:'Agent 工程',tone:'orange',goal:'把模型接进可靠的工具循环',items:['结构化输出','Tool schema 设计','调用—观察—再调用循环','重试与超时','状态与记忆','Planner / Executor','RAG Agent','Tracing 与评测'],next:'实现带工具调用、重试和最大步数的 Agent loop'}
];
const trackCards=document.querySelector('#trackCards');
trackCards.innerHTML=tracks.map(t=>`<article class="track-card ${t.tone}"><div class="track-icon">${t.icon}</div><h3>${t.name}</h3><p class="track-goal">${t.goal}</p><div class="track-items">${t.items.map(x=>`<span>${x}</span>`).join('')}</div><p class="track-next"><b>练习方向：</b>${t.next}</p><button class="secondary track-btn" data-track="${t.name}">加入练习计划</button></article>`).join('');
document.querySelectorAll('.track-btn').forEach(btn=>btn.onclick=()=>{btn.textContent='已加入 ✓';btn.classList.add('added');localStorage.setItem('mimicTrack',btn.dataset.track)});
