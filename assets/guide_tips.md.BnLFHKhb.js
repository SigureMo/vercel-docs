import{_ as a,c as i,o as t,ag as e}from"./chunks/framework.BmLMQRXF.js";const r=JSON.parse('{"title":"小技巧","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tips.md","filePath":"guide/tips.md"}'),l={name:"guide/tips.md"};function n(p,s,h,o,d,k){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h1><h2 id="作为-log-输出到文件" tabindex="-1">作为 log 输出到文件 <a class="header-anchor" href="#作为-log-输出到文件" aria-label="Permalink to &quot;作为 log 输出到文件&quot;">​</a></h2><p>虽说我不像 bilili 前辈那样会全屏刷新，但进度条还是会一直刷新占据多行，可能影响 log 的阅读，另外颜色码也是难以阅读的，因此我们可以通过选项禁用他们：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-color</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-progress</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span></code></pre></div><h2 id="使用配置自定义默认参数" tabindex="-1">使用配置自定义默认参数 <a class="header-anchor" href="#使用配置自定义默认参数" aria-label="Permalink to &quot;使用配置自定义默认参数&quot;">​</a></h2><p>如果你希望修改我的部分参数，那么可能每次运行都需要在后面加上长长一串选项，为了避免这个问题，你可以尝试使用配置文件</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.config/yutto/yutto.toml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#:schema https://raw.githubusercontent.com/yutto-dev/yutto/refs/heads/main/schemas/config.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">basic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dir = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;~/Movies/yutto&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sessdata = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;***************&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">num_workers = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vcodec = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;av1:copy&quot;</span></span></code></pre></div><p>当然，请手动修改 <code>sessdata</code> 内容为自己的 <code>SESSDATA</code> 哦～</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本方案可替代原有的「自定义命令别名」方式～</p><details class="details custom-block"><summary>原「自定义命令别名」方案</summary><p>在 <code>~/.zshrc</code> / <code>~/.bashrc</code> 中自定义一条 alias，像这样</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ytt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yutto -d ~/Movies/yutto/ -c \`cat ~/.sessdata\` -n 16 --vcodec=&quot;av1:copy&quot;&#39;</span></span></code></pre></div><p>这样我每次只需要 <code>ytt &lt;url&gt;</code> 就可以直接使用这些参数进行下载啦～</p><p>由于我提前在 <code>~/.sessdata</code> 存储了我的 <code>SESSDATA</code>，所以避免每次都要手动输入 cookie 的问题。</p></details></div>`,9)]))}const g=a(l,[["render",n]]);export{r as __pageData,g as default};
