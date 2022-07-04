import{_ as n,c as e,o,a}from"./app.cf930e1c.js";const m='{"title":"Config files","description":"","frontmatter":{},"headers":[{"level":2,"title":"Environment variables","slug":"environment-variables"},{"level":2,"title":"Config loader","slug":"config-loader"}],"relativePath":"features/config-files.md"}',s={},t=a(`<h1 id="config-files" tabindex="-1">Config files <a class="header-anchor" href="#config-files" aria-hidden="true">#</a></h1><h2 id="environment-variables" tabindex="-1">Environment variables <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h2><p>Compas lets you forget loading your <code>.env</code> files. All main entry points (<code>mainFn</code>, <code>mainTestFn</code> and <code>mainBenchFn</code>) will load both the <code>.env</code> and <code>.env.local</code> files automatically. The loader that is used is provided by the <a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener noreferrer">dotenv</a> package.</p><p>Compas advises to check in a ready to go <code>.env.example</code> in your version control or preferably when using all Compas provided tooling, just a <code>.env</code> file without any actual production secrets. This way new contributors can just fire up some commands and verify that they can run your project locally instead of trying to figure out what they need to configure where.</p><p>The <code>.env</code> file loader skips keys already present in your environment. This is also used by the <code>.env.local</code> file. It is loaded first so any environment variables present in both <code>.env.local</code> and <code>.env</code> will have the value defined by the former.</p><p>To speed up accessing environment variables the @compas/stdlib package provides an exported object <code>environment</code> which is an exact copy of <code>process.<wbr>env</code> before the callback is called in <code>mainFn</code>. If you use <code>process.<wbr>env</code> to set values, please don&#39;t, you can use <code>refreshEnvironmentCache</code> to make a new copy.</p><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>Never check in production secrets in to your version control.</p></div><h2 id="config-loader" tabindex="-1">Config loader <a class="header-anchor" href="#config-loader" aria-hidden="true">#</a></h2><p>Compas also comes with a configuration file loader in <code>@compas/stdlib</code>. This will be used by other Compas features, but also allows you to have a project specific configuration file. You can use this to validate and convert your environment variables for example doing the following transformation:</p><div class="language-.dotenv"><pre><code>POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
</code></pre></div><p>to</p><div class="language-js"><pre><code><span class="token comment">// config/my-project.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">postgres</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">user</span><span class="token operator">:</span> environment<span class="token punctuation">.</span><span class="token constant">POSTGRES_USER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> environment<span class="token punctuation">.</span><span class="token constant">POSTGRES_PASSWORD</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Or it can be used by for example Compas to let you specify your migrations directory to make <code>compas migrate</code> more configurable.</p><p>The configuration files can be in 2 formats: JSON or ES modules (both <code>.js</code> and <code>.mjs</code> extensions are supported). The ES module should export a synchronous function returning a config data object. The configuration files can be loaded from the project root, the project <code>config</code> directory, or from the OS and user specific config directory.</p><p><strong>configLoaderGet()</strong></p><p>The config file load function, it caches results based on the provided name and key. It returns promise resolving to an object with the following properties:</p><div class="language-js"><pre><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">configLoaderGet</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token string">&quot;project&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// always equals to the provided name, &#39;example&#39;</span>
result<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token comment">// always equal to the provided location, &#39;project&#39;</span>
result<span class="token punctuation">.</span>location<span class="token punctuation">;</span>

<span class="token comment">// object, does not exist if no config file is found</span>
result<span class="token punctuation">.</span>resolvedLocation<span class="token punctuation">;</span>
<span class="token comment">// The directory where the config file is found</span>
result<span class="token punctuation">.</span>resolvedLocation<span class="token punctuation">.</span>directory<span class="token punctuation">;</span>
<span class="token comment">// Filename with extension, \`example.json\` or \`example.js\` or \`example.mjs\`</span>
result<span class="token punctuation">.</span>resolvedLocation<span class="token punctuation">.</span>filename<span class="token punctuation">;</span>

<span class="token comment">// Object, either the object returned from a config function or a parsed json file.</span>
<span class="token comment">// This is an empty object if no config file is found</span>
result<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
</code></pre></div><p><strong>configLoaderDeleteCache</strong></p><p>Delete the config loader cache. This can be used if your tool overwrites the config, or when writing some reload / watch behaviour.</p>`,19),c=[t];function p(i,r,l,d,u,f){return o(),e("div",null,c)}var k=n(s,[["render",p]]);export{m as __pageData,k as default};
