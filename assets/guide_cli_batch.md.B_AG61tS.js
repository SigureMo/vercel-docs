import{_ as i,c as a,o as l,ag as t}from"./chunks/framework.BmLMQRXF.js";const o=JSON.parse('{"title":"批量参数","description":"","frontmatter":{"aside":true},"headers":[],"relativePath":"guide/cli/batch.md","filePath":"guide/cli/batch.md"}'),n={name:"guide/cli/batch.md"};function h(p,s,e,k,d,r){return l(),a("div",null,s[0]||(s[0]=[t(`<h1 id="批量参数" tabindex="-1">批量参数 <a class="header-anchor" href="#批量参数" aria-label="Permalink to &quot;批量参数&quot;">​</a></h1><p>有些参数是只有批量下载时才可以使用的</p><h2 id="启用批量下载" tabindex="-1">启用批量下载 <a class="header-anchor" href="#启用批量下载" aria-label="Permalink to &quot;启用批量下载&quot;">​</a></h2><ul><li>参数 <code>-b</code> 或 <code>--batch</code></li><li>配置项 「不支持」</li><li>默认值 <code>False</code></li></ul><p>只需要 <code>yutto --batch &lt;url&gt;</code> 即可启用批量下载功能。</p><div class="warning custom-block"><p class="custom-block-title">该选项不支持配置项</p><p>因为是否启用批量下载在大多数情况需要针对具体链接来选择，因此将其设置在配置项里基本是无意义的。</p></div><h2 id="选集" tabindex="-1">选集 <a class="header-anchor" href="#选集" aria-label="Permalink to &quot;选集&quot;">​</a></h2><ul><li>参数 <code>-p</code> 或 <code>--episodes</code></li><li>配置项 「不支持」</li><li>默认值 <code>1~-1</code>（也即全选）</li></ul><p>也就是选集咯，其语法是这样的</p><ul><li><code>&lt;p1&gt;</code> 单独下某一剧集 <ul><li>支持负数来选择倒数第几话</li><li>此外还可以使用 <code>$</code> 来代表 <code>-1</code></li></ul></li><li><code>&lt;p_start&gt;~&lt;p_end&gt;</code> 使用 <code>~</code> 可以连续选取（如果起始为 1，或者终止为 -1 则可以省略）</li><li><code>&lt;p1&gt;,&lt;p2&gt;,&lt;p3&gt;,...,&lt;pn&gt;</code> 使用 <code>,</code> 可以不连续选取</li></ul><p>emmm，直接看的话大概并不能知道我在说什么，所以我们通过几个小例子来了解其语法</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 假设要下载一个具有 24 话的番剧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果我们只想下载第 3 话，只需要这样</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 那如果我想下载第 5 话到第 7 话呢，使用 \`~\` 可以连续选中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5~7</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 那我想下载第 12 话和第 17 话又要怎么办？此时只需要 \`,\` 就可以将多个不连续的选集一起选中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 12,17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 那我突然又想将刚才那些都选中了呢？还是使用 \`,\` 呀，将它们连在一起即可</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3,5~7,12,17</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 嗯，你已经把基本用法都了解过了，很简单吧～</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下面是一些语法糖，不了解也完全不会影响任何功能哒～</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 那如果我只知道我想下载倒数第 3 话，而不想算倒数第三话是第几话应该怎么办？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此时可以用负数哒～不过要注意的是，这种参数以 \`-\` 开头参数需要使用 \`=\` 来连接选项和参数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p=-3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 那么如果想下载最后一话你可能会想到 \`-p=-1\` 对吧？不过我内置了符号 $ 用于代表最后一话</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 像下面这样就可以直接下载最后一话啦～</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为了进一步方便表示一个范围选取，在从第一话开始选取或者以最后一话为终止时可以省略它们</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这样就是前三话啦（这里与以 \`-\` 开头类似，以 \`~\` 开头可能被识别为 $HOME，因此最好也用等号，或者使用引号包裹）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这样就是后四话啦</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p=-4~</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 所有语法都了解完啦，我们看一个稍微复杂的例子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yutto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;~3,10,12~14,16,-4~&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 很明显，上面的例子就是下载前 3 话、第 10 话、第 12 到 14 话、第 16 话以及后 4 话</span></span></code></pre></div><p>下面是一些要注意的问题</p><ol><li>这里使用的序号是视频的顺序序号，而不是番剧所标注的<code>第 n 话</code>，因为有可能会出现 <code>第 x.5 话</code> 等等的特殊情况，此时一定要按照顺序自行计数。</li><li>参数值里一定不要加空格</li><li>参数值开头为特殊符号时最好使用 <code>=</code> 来连接选项和参数，或者尝试使用引号包裹参数</li><li>个人空间、视频列表、收藏夹等批量下载暂不支持选集操作</li></ol><div class="warning custom-block"><p class="custom-block-title">该选项不支持配置项</p><p>与「启用批量下载」相同，具体选集只有在具体链接时才能确定，为该选项指定配置项同样无意义。</p></div><h2 id="同时下载附加剧集" tabindex="-1">同时下载附加剧集 <a class="header-anchor" href="#同时下载附加剧集" aria-label="Permalink to &quot;同时下载附加剧集&quot;">​</a></h2><ul><li>参数 <code>-s</code> 或 <code>--with-section</code></li><li>配置项 <code>batch.with_section</code></li><li>默认值 <code>False</code></li></ul><h2 id="指定稿件发布时间范围" tabindex="-1">指定稿件发布时间范围 <a class="header-anchor" href="#指定稿件发布时间范围" aria-label="Permalink to &quot;指定稿件发布时间范围&quot;">​</a></h2><ul><li><p>参数 <code>--batch-filter-start-time</code> 和 <code>--batch-filter-end-time</code> 分别表示<code>开始</code>和<code>结束</code>时间，该区间<strong>左闭右开</strong></p></li><li><p>配置项 <code>batch.filter_start_time</code> 和 <code>batch.filter_end_time</code></p></li><li><p>默认 <code>不限制</code></p></li><li><p>支持的格式</p><ul><li><code>%Y-%m-%d</code></li><li><code>%Y-%m-%d %H:%M:%S</code></li></ul><p>例如仅下载 2020 年投稿的视频，可以这样:</p><p><code>--batch-filter-start-time=2020-01-01 --batch-filter-end-time=2021-01-01</code></p></li></ul>`,19)]))}const g=i(n,[["render",h]]);export{o as __pageData,g as default};
