import{_ as n,c as s,o as a,a as t}from"./app.cf930e1c.js";const g='{"title":"Release notes v0.0.79","description":"","frontmatter":{},"headers":[{"level":3,"title":"Chores","slug":"chores"},{"level":3,"title":"Cli","slug":"cli"},{"level":3,"title":"Code gen","slug":"code-gen"},{"level":3,"title":"Store","slug":"store"}],"relativePath":"releases/0.0.79.md"}',e={},o=t(`<h1 id="release-notes-v0-0-79" tabindex="-1">Release notes v0.0.79 <a class="header-anchor" href="#release-notes-v0-0-79" aria-hidden="true">#</a></h1><p>The first time we actually have release notes. I guess it is a start in making LBU a bit more mature. Remember when you had to search through all PR&#39;s cause something was broken in a new release? Yea, I do ;P Let&#39;s get to the juicy details.</p><h3 id="chores" tabindex="-1">Chores <a class="header-anchor" href="#chores" aria-hidden="true">#</a></h3><p>We have updated Postgres twice to a new minor versions of <code>2.0.0-beta</code>. Although the package doesn&#39;t have clear goal for what the <code>2.0.0</code> release should contain, we don&#39;t have to step up there or look for alternatives yet. Other than that, some minor things like automatically linking these release notes in the generated changelog, switching the default branch to <code>main</code> and fixing up the dependabot config.</p><h3 id="cli" tabindex="-1">Cli <a class="header-anchor" href="#cli" aria-hidden="true">#</a></h3><p>In our test runner we now warn when a subtest uses an assertion on the parent <code>t</code>. This prevents confusion when a failing assertion is printed under the parent, instead of the subtest.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mainTestFn<span class="token punctuation">,</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@compas/cli&quot;</span><span class="token punctuation">;</span>

<span class="token function">mainTestFn</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;My test&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  t<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;sub test&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// warning: called &#39;t.ok&#39; on parent &#39;t&#39;. Accept &#39;t&#39; as argument in the callback of &#39;t.test(msg, callback)&#39;.</span>
    t<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>This caught a single usage in the lbu codebase <a href="https://github.com/compasjs/compas/blob/fba1ffe00a9f6dc43ed75c521f62eb9a9fb2c985/packages/stdlib/src/lodash.test.js#L112" target="_blank" rel="noopener noreferrer">here</a> .</p><h3 id="code-gen" tabindex="-1">Code gen <a class="header-anchor" href="#code-gen" aria-hidden="true">#</a></h3><p>Since we actively used the open-api importer for the first time, <a href="https://github.com/tjonger" target="_blank" rel="noopener noreferrer">@tjonger</a> found and fixed various bugs in there. Notably, resolving references in path and query parameters and creating a name from the path if <code>operationId</code> is not available.</p><p>Other than that we have two new features, soft deletes for sql generation and cancel token support in apiClient and react-query hook generation. Let&#39;s start with the latter.</p><p>We added support for request cancellation with <a href="https://github.com/axios/axios#cancellation" target="_blank" rel="noopener noreferrer">Axios</a>. To minimize the differences between the api client generated when <code>isNode</code> is used versus <code>isBrowser</code>, most of the logic is done in the generated hooks. We accept the property <code>cancelToken</code> on the <code>options</code> argument, which is the <code>QueryConfig</code> provided to <code>useQuery</code>. If provided, the <code>cancelToken#token</code> is passed through to the generated api client function, and the <code>cancelToken#cancel</code> function is added to the returned Promise. This is behaviour is mostly in line with <a href="https://react-query.tanstack.com/docs/guides/query-cancellation#using-axios" target="_blank" rel="noopener noreferrer">react-query documentation</a>.</p><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CancelToken<span class="token punctuation">,</span> CancelTokenSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// I don&#39;t know React, please provide better sample :S</span>
  <span class="token keyword">const</span> cancelToken <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Expensive operation</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> imageBlob <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAppConvertCountToImage</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> cancelToken <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>imageBlob<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>The other big thing is soft delete support in sql generation. This can be enabled by passing in <code>withSoftDeletes: true</code> in <code>enableQueries</code> calls. This takes over the old <code>withHistory</code>, and immediately removed support. Soft deletes add a <code>deletedAt</code> column. All generated <code>where</code> arguments by default won&#39;t return &#39;deleted&#39; records. This can be enabled by providing <code>{ deletedAtInclude: true }</code>. To permanently delete a record, <code>groupQueries.tableDeletePermanent</code> is generated as well.</p><div class="language-js"><pre><code><span class="token comment">// In generate</span>
<span class="token keyword">const</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeCreator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;myValue&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">withSoftDeletes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Insert a record</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>myValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> appQueries<span class="token punctuation">.</span><span class="token function">myValueInsert</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> firstCount <span class="token operator">=</span> <span class="token keyword">await</span> appQueries<span class="token punctuation">.</span><span class="token function">myValueCount</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// firstCount === 1</span>

<span class="token comment">// Delete our \`myValue\`</span>
<span class="token keyword">await</span> appQueries<span class="token punctuation">.</span><span class="token function">myValueDelete</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> myValue<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> secondCount <span class="token operator">=</span> <span class="token keyword">await</span> appQueries<span class="token punctuation">.</span><span class="token function">myValueCount</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// secondCount === 0, deleted records are not included</span>

<span class="token keyword">const</span> countWithDeleted <span class="token operator">=</span> <span class="token keyword">await</span> appQueries<span class="token punctuation">.</span><span class="token function">myValueCount</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">deletedAtInclude</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// countWithDeleted === 1</span>

<span class="token comment">// Remove record completely</span>
<span class="token keyword">await</span> appQueries<span class="token punctuation">.</span><span class="token function">myValueDeletePermanent</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> myValue<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Note that cascading soft deletes is not included in this release. The generated DDL, enabled by <code>app.generate({ ..., dumpPostgres: true })</code> does not yet interact with <code>withSoftDeletes</code>. For an example of how to use it manually see the open <a href="https://github.com/compasjs/compas/issues/342" target="_blank" rel="noopener noreferrer">issue</a></p><h3 id="store" tabindex="-1">Store <a class="header-anchor" href="#store" aria-hidden="true">#</a></h3><p>This package seems to have the most breaking changes. We renamed all table names to use singular nouns:</p><ul><li><code>migrations</code> -&gt; <code>migration</code></li><li><code>fileStore</code> -&gt; <code>file</code> -&gt; <code>storeQueries.fileSelect</code></li><li><code>sessionStore</code> -&gt; <code>session</code> -&gt; <code>storeQueries.sessionSelect</code></li><li><code>jobQueue</code> -&gt; <code>job</code> -&gt; <code>storeQueries.jobSelect</code></li></ul><p>File now uses the <code>withSoftDeletes</code> instead of <code>withHistory</code>. This means that the <code>syncDeletedFiles</code> function will only clean up &#39;permanently&#39; deleted files. We also renamed <code>file#filename</code> to <code>file#name</code>.</p><p><code>getMigrationsToBeApplied</code> from the migration part of <code>@lbu/store</code>, will also return a list of migrations that have changed since they are applied to the database. This allows you to communicate to other developers that some migrations have changed and that they may need to do a full database reset.</p><h5 id="in-closing" tabindex="-1">In closing <a class="header-anchor" href="#in-closing" aria-hidden="true">#</a></h5><p>As it is the first time doing this, I did not expect it to take this much time. Any constructive feedback to the writing style, background information provided or other questions are welcome.</p><p>That&#39;s all!</p><p><s>Only 14 days vacation left \u{1F383}</s></p>`,25),p=[o];function c(l,u,i,r,k,d){return a(),s("div",null,p)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};
