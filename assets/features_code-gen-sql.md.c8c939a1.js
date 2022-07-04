import{_ as n,c as s,o as a,a as t}from"./app.cf930e1c.js";const m='{"title":"Code generator SQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting started","slug":"getting-started"},{"level":2,"title":"Defining the schema","slug":"defining-the-schema"},{"level":2,"title":"CRUD","slug":"crud"},{"level":2,"title":"Relations and traversal","slug":"relations-and-traversal"},{"level":2,"title":"Where options","slug":"where-options"},{"level":2,"title":"Atomic updates","slug":"atomic-updates"},{"level":2,"title":"Date and time handling","slug":"date-and-time-handling"},{"level":2,"title":"Soft deletes","slug":"soft-deletes"},{"level":2,"title":"Other constraints","slug":"other-constraints"}],"relativePath":"features/code-gen-sql.md"}',p={},o=t(`<h1 id="code-generator-sql" tabindex="-1">Code generator SQL <a class="header-anchor" href="#code-generator-sql" aria-hidden="true">#</a></h1><p>Compas code-gen also supports defining a relational schema. And is able to generate all necessary queries for all common use cases.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Requires <code>@compas/cli</code>, <code>@compas/stdlib</code>, <code>@compas/store</code> and <code>@compas/code-gen</code> to be installed.</p></div><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>In the <a href="/features/code-gen-validators.html">validator &amp; type generator</a> we have seen how to utilize the Compas type system to generate types and validators. Here we are building a separate system. Most of the time your relational model does not reflect the needs of your API consumers. To reflect that Compas advises to keep the types defining a database schema separate from the rest. Compas also does this by forcing the sql generator to output all it&#39;s files in a <code>$outputDirectory/database</code> directory.</p><h2 id="defining-the-schema" tabindex="-1">Defining the schema <a class="header-anchor" href="#defining-the-schema" aria-hidden="true">#</a></h2><p>At the root, a database schema in Compas is a <code>T.object()</code> that defines some keys, and calls <code>.enableQueries()</code> so it is picked up by the generator.</p><p>Let&#39;s start with writing a database schema to represent a blog post.</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeCreator</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">searchable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isPublished</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">bool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">searchable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">withPrimaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// This is a default, and adds a \`id: T.uuid()\` to our keys.</span>
      <span class="token literal-property property">withDates</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Add&#39;s a \`createdAt\` and \`updatedAt\` field for us</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Make sure to add <code>sql</code> to your generators and generate again. Take a look in your generated directory and see what&#39;s generated. Some things include:</p><ul><li>The <code>DatabasePost</code> type</li><li>A new <code>database</code> directory containing a <code>post.js</code> that contains our queries</li><li>An <code>queries</code> export in <code>database/index.js</code> that collects all our CRUD queries</li><li>An example for the necessary Postgres DDL (ie <code>CREATE TABLE</code> queries) in <code>common/structure.sql</code>.</li></ul><h2 id="crud" tabindex="-1">CRUD <a class="header-anchor" href="#crud" aria-hidden="true">#</a></h2><p>The <code>queries</code> export from <code>database/index.js</code> contains typed CRUD related queries. All values are automatically escaped to prevent injection attacks. Let&#39;s take a look at them by example;</p><p><strong>Inserts</strong>:</p><div class="language-js"><pre><code><span class="token comment">// A single insert</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postInsert</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;My first post&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// post =&gt; { id: &quot;some uuid&quot;, title: &quot;My first post&quot;, body: &quot;...&quot;, isPublished: false, createdAt: ..., updatedAt: ... }</span>

<span class="token comment">// Multiple inserts</span>
<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postInsert</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Post1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Post2&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// posts =&gt; [{ id: &quot;some uuid&quot;, title: &quot;Post1&quot;, ... }, { id: &quot;other uuid&quot;, title: &quot;Post2&quot;, ... }]</span>

<span class="token comment">// With relation</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>category<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">categoryInsert</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Category 1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postInsert</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;My post&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">category</span><span class="token operator">:</span> category<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// post =&gt; { id: &quot;some-uuid&quot;, title: &quot;My post&quot;, category: &quot;category.id uuid&quot;, ... }</span>
</code></pre></div><p><strong>Updates</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Update single field, without returning the new row</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">isPublished</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Update single field, return all fields</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updatedPost<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">isPublished</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">returning</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// updatedPost =&gt; { id: post.id, title: post.title, isPublished: true }</span>

<span class="token comment">// Update fields, return some fields</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>updatedPost<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">postUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">isPublished</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;New post title&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">returning</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// updatedPost =&gt; { id: post.id, title: &quot;New post title&quot; }</span>
</code></pre></div><p><strong>Deletes</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Delete with the provided where clause</span>
<span class="token keyword">await</span> quries<span class="token punctuation">.</span><span class="token function">postDelete</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>Selects</strong>:</p><p>The missing part here are &#39;selects&#39;. These are handled by <code>queryEntity</code> functions exported from the <code>database/entity.js</code> files, in our case <code>queryPost</code> in <code>database/post.js</code>. These are fully typed as well, and the input is validated or escaped before it is transformed in to a query. The result of the query is then transformed to conform to the types. The most important transformers being converting <code>T.date()</code> columns to JS Date objects and <code>null</code> values to <code>undefined</code>.</p><div class="language-js"><pre><code><span class="token comment">// Plain select</span>
<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// posts =&gt; [{ ... }, { ... }]</span>

<span class="token comment">// Select with where clause</span>
<span class="token keyword">const</span> publishedPosts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isPublished</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or with a limit and offset</span>
<span class="token keyword">const</span> paginatedPosts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Applying custom ordering</span>
<span class="token comment">// \`orderBy\` is used to apply ordering in that order,</span>
<span class="token comment">// and \`orderBySpec\` can be used to provide the sort specification.</span>
<span class="token keyword">const</span> orderedResults <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">orderBy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">orderBySpec</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;DESC&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>All above things can of course freely be combined. Another note here is that <code>orderBy</code> and <code>where</code> are based on fields defined with <code>.searchable()</code> in the Compas structure. This is done to make it more explicit what the main search fields are of an entity and thus may be good candidates for PostgreSQL indices.</p><h2 id="relations-and-traversal" tabindex="-1">Relations and traversal <a class="header-anchor" href="#relations-and-traversal" aria-hidden="true">#</a></h2><p>A relational database is not useful if you can not have relations between entities. Compas also supports the most common ways of modelling them and provides a query builder to query an entity with its relations mapped in a single Postgres query.</p><p>Let&#39;s take a look at how that works, by creating a model with the following entities and their relations;</p><ul><li>Category entity <ul><li>Can be linked to Posts</li></ul></li><li>User entity <ul><li>Has optional settings</li><li>Has written Posts</li></ul></li><li>UserSetting entity <ul><li>Belongs to User</li></ul></li><li>Post entity <ul><li>Written by User</li><li>Can have linked Categories</li></ul></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeCreator</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;category&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span>
      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">oneToMany</span><span class="token punctuation">(</span><span class="token string">&quot;linkedPosts&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postCategory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span>
      <span class="token comment">// &#39;Virtual&#39; side of the relation</span>
      <span class="token comment">// &#39;posts&#39; should be the same name as the last argument to the &#39;manyToOne&#39;</span>
      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">oneToMany</span><span class="token punctuation">(</span><span class="token string">&quot;posts&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;userSettings&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span>
      <span class="token comment">// Owning side of a one-to-one relation</span>
      <span class="token comment">// The &#39;virtual&#39; side is automatically added</span>
      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">oneToOne</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;settings&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span>
      <span class="token comment">// Owning side of the relation, a field is added named &#39;writer&#39;</span>
      <span class="token comment">//  which has the same type as the primary key of &#39;user&#39;.</span>
      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">manyToOne</span><span class="token punctuation">(</span><span class="token string">&quot;writer&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;posts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">oneToMany</span><span class="token punctuation">(</span><span class="token string">&quot;linkedCategories&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postCategory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// Many-to-many relations need a join table, this is not automatically done by Compas</span>
  <span class="token comment">// The join table consists of two manyToOne relations</span>
  <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">&quot;postCategory&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">relations</span><span class="token punctuation">(</span>
      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">manyToOne</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;linkedCategories&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">manyToOne</span><span class="token punctuation">(</span>
        <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token constant">T</span><span class="token punctuation">.</span><span class="token function">reference</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">&quot;linkedPosts&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">enableQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>After regeneration, quite a bunch of code is added. See <code>common/structure.sql</code> for how Compas suggests you to create the necessary entities and foreign keys.</p><p>With all the information that you have added in the <code>.relations</code> calls, Compas can create queries that join relations and nest the result set automatically. In most of these example we use <code>[varName]</code>, this is for illustrative purposes only, all calls will return an array with the results. Let&#39;s look at some examples;</p><p><strong>One-to-one</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Get user, but don&#39;t add join</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// user =&gt; user.settings (undefined)</span>

<span class="token comment">// Get user settings with the user.</span>
<span class="token comment">// &#39;settings&#39; has an &#39;undefined&#39; type, cause you can insert a user</span>
<span class="token comment">// without inserting settings for them.</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// user =&gt; user.settings (undefined|DatabaseUserSettings)</span>

<span class="token comment">// Get settings, but don&#39;t join user.</span>
<span class="token comment">// Since UserSettings is the owning side of the relation,</span>
<span class="token comment">// the returned entity will have the &#39;id&#39; from User.</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>userSettings<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUserSettings</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// userSettings =&gt; userSettings.user (string, user.id)</span>

<span class="token comment">// Get the settings and the user</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>userSettings<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUserSettings</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// userSettings =&gt; userSetting.user (DatabaseUser)</span>
</code></pre></div><p><strong>Many-to-one</strong>:</p><p>From the owning side, this behaves the same as the &#39;One-to-one&#39; owning side.</p><div class="language-js"><pre><code><span class="token comment">// Get post, but don&#39;t join writer</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// post =&gt; post.writer (string, user.id);</span>

<span class="token comment">// Get post with the writer</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">writer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// post =&gt; post.writer (DatabaseUser)</span>
</code></pre></div><p><strong>One-to-many</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Get user with posts</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// user =&gt; user.posts (DatabasePost[])</span>

<span class="token comment">// Get post with categories.</span>
<span class="token comment">// Need to traverse to many-to-one relations</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">linkedCategories</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// post =&gt; post.linkedCategories (DatabasePostCategory[])</span>
<span class="token comment">// post =&gt; post.linkedCategories[0].category (DatabaseCategory[])</span>
<span class="token comment">// post =&gt; post.linkedCategories[0].post (string, join is not added)</span>
</code></pre></div><p><strong>Combined</strong>:</p><p>All relations can freely be combined. So you can query categories named &#39;sql&#39; or &#39;code-gen&#39; with all posts in the category and their writer like so:</p><div class="language-js"><pre><code><span class="token keyword">const</span> categories <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryCategories</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Joins</span>
  <span class="token literal-property property">linkedPosts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">writer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Only query sql and code-gen categories</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nameIn</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;code-gen&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Order by category.name ASC</span>
  <span class="token literal-property property">orderBy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">orderBySpec</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ASC&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="where-options" tabindex="-1">Where options <a class="header-anchor" href="#where-options" aria-hidden="true">#</a></h2><p>All searchable fields and fields used in relations can be used in where clauses. The values used in where-clauses are validated and escaped, so user input can be used.</p><div class="language-js"><pre><code><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Jan&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// select * from &quot;user&quot; u WHERE u.name = &#39;Jan&#39;;</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ageGreaterThan</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// select * from &quot;user&quot; u WHERE u.age &gt; 18;</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nameILike</span><span class="token operator">:</span> <span class="token string">&quot;de Vries&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">roleIn</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;moderator&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// select * from &quot;user&quot; u WHERE u.name ILIKE &#39;%de Vries%&#39; AND role = ANY(ARRAY[&#39;moderator&#39;, &#39;admin&#39;])</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$or</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">nameILike</span><span class="token operator">:</span> <span class="token string">&quot;de Vries&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">roleIn</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;moderator&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// select * from &quot;user&quot; u WHERE (u.name ILIKE &#39;%de Vries%&#39; AND role = ANY(ARRAY[&#39;moderator&#39;, &#39;admin&#39;])) OR (u.id = &#39;uuid-value&#39;)</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">settingsNotExists</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// nested where clause</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// select * from &quot;user&quot; u WHERE NOT EXISTS (select from &quot;userSettings&quot; us WHERE us.user = u.id);</span>

<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Useful for jsonb fields, or if field is not searchable</span>
    <span class="token literal-property property">$raw</span><span class="token operator">:</span> query<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">u.&quot;emailPreferences&quot;-&gt;&gt;&#39;receiveNewsletter&#39; = true</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// select * from &quot;user&quot; u WHERE (u.&quot;emailPreferences&quot;-&gt;&gt;&#39;receiveNewsletter&#39; = true);</span>
</code></pre></div><p>Another useful option provided by the where clause are the <code>viaXxx</code> options. This allows you to query results from table <code>X</code> via their relation to table <code>Y</code>. It results in queries that can span across over multiple tables to fetch results with only a single piece of information that may not be immediately related to what you need. For example:</p><div class="language-js"><pre><code><span class="token keyword">const</span> postsForUser <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryPost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">viaWriter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Docs author&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> categoriesThatUserHasPostIn <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryCategory</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">viaLinkedPosts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">viaPost</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">viaWriter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Docs author&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dashboardsForAllGroupsThatAUserIsIn <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryDashboard</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Owner is in this case a group</span>
    <span class="token literal-property property">viaOwner</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">viaUsers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="atomic-updates" tabindex="-1">Atomic updates <a class="header-anchor" href="#atomic-updates" aria-hidden="true">#</a></h2><p>The generated update queries, can do a bit more than partial updates. Atomic updates are supported as well. This way you can safely execute some operators on the existing value, utilizing Postgres. This prevents race-conditions in your code between the select of some value and the update of that value.</p><p>Multiple atomic updates can be combined in the same update query, however, only a single atomic update can be done per column. This is also enforced in the types and validators. Let&#39;s look at some examples, based on the column type.</p><p><strong>Booleans</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Flip the boolean value</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">jobUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isComplete</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$negate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>Numbers</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Add to the balance field</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">balance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$add</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Subtract from the balance field</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">balance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$subtract</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// $multiply and $divide are supported as well</span>
</code></pre></div><p><strong>Strings</strong>:</p><div class="language-js"><pre><code><span class="token comment">// Flip the boolean value</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">personalNotes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$append</span><span class="token operator">:</span> <span class="token string">&quot;\\nSome important addition.&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>Dates</strong></p><p>This uses Postgres intervals, see the <a href="https://www.postgresql.org/docs/current/functions-datetime.html" target="_blank" rel="noopener noreferrer">Postgres docs</a> for supported intervals</p><div class="language-js"><pre><code><span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">licenseValidTill</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$add</span><span class="token operator">:</span> <span class="token string">&quot;1 year 2 months 3 hours&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Oops, conditions of our virtual buddy are not great</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">virtualBuddyUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">virtualLifeExpectancy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$subtract</span><span class="token operator">:</span> <span class="token string">&quot;2 hours 3 seconds&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>Jsonb</strong>:</p><p>These values are not thoroughly validated, so use with caution. <code>$set</code> uses <a href="https://www.postgresql.org/docs/current/functions-json.html" target="_blank" rel="noopener noreferrer">jsonb_set</a> behavior.</p><div class="language-js"><pre><code><span class="token comment">// Disable email notifications of watched issues</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">emailPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$set</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;subscriptions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watchedIssues&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Remove all subscriptions</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">userUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">emailPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$remove</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;subscriptions&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token comment">/* ... */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="date-and-time-handling" tabindex="-1">Date and time handling <a class="header-anchor" href="#date-and-time-handling" aria-hidden="true">#</a></h2><p>Compas uses <code>timestampt</code> for <code>T.date()</code> types. This ensures that you can insert any date with timezone, and instruct Postgres to return them in whatever timezone you want. Any query, except <code>queryBuilder.execRaw()</code>, will return JavaScript Date objects.</p><p>There is also <code>T.date().dateOnly()</code> which uses a Postgres <code>date</code> column. Compas makes sure that the Postgres client doesn&#39;t convert these to dates, but instead always handles them in the form of <code>YYYY-MM-DD</code> in selects, inserts and where-clauses. <code>T.date().timeOnly()</code> works almost the same and uses a <code>time without timezone</code> column. Inserts and where clauses can use <code>HH:MM(:SS(.mmm))</code> strings, but selects are always returned as <code>HH:MM:SS(.mmm)</code>.</p><p>To get this behaviour, Compas ensures that connections created via <code>newPostgresConnection</code> from @compas/store, disable any conversion to JavaScript Date objects for any <code>date</code> &amp; <code>time</code> columns.</p><h2 id="soft-deletes" tabindex="-1">Soft deletes <a class="header-anchor" href="#soft-deletes" aria-hidden="true">#</a></h2><p>Compas also supports some form soft delete support via the <code>withSoftDeletes</code> option passed to <code>.enableQueries()</code>. This option also enables <code>withDates</code> and creates fields for <code>createdAt</code>, <code>updatedAt</code> and <code>deletedAt</code>. The generated queries by default prevent you from querying soft deleted rows. To include those you need to pass <code>deletedAtIncludeNotNull</code> in the where clause. Try to minimize the use of this future, as it can grow complex quite fast. Especially if multiple entities can be soft deleted apart from each other.</p><div class="language-js"><pre><code><span class="token comment">// Create entity</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>entity<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">entityInsert</span><span class="token punctuation">(</span>sq<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>selectedEntity<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryEntity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> entity<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Soft delete entity</span>
<span class="token comment">// This also supports setting a date in the future, for when it should be soft deleted.</span>
<span class="token comment">// A soft delete can also be removed by providing \`{ update: { deletedAt: null }, where: { id: entity.id, deletedAtIncludeNotNull } }\`</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">entityUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">deletedAt</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> entity<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// No result, since it is soft deleted</span>
<span class="token comment">// If a \`deletedAt\` is set in the future, it will still be returned here, till the set date is passed.</span>
<span class="token keyword">await</span> <span class="token function">queryEntity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> entity<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>softDeletedEntity<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryEntity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> entity<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token comment">// Supported everywhere, where a \`where\` is accepted.</span>
    <span class="token literal-property property">deletedAtIncludeNotNull</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Hard deletes always add \`where.deletedAtIncludeNotNull = true\`</span>
<span class="token keyword">await</span> queries<span class="token punctuation">.</span><span class="token function">entityDelete</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> entity<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="other-constraints" tabindex="-1">Other constraints <a class="header-anchor" href="#other-constraints" aria-hidden="true">#</a></h2><p>The sql generator has quite a few constraints and checks that it checks before generating any code.</p><p>// TODO: reference them and their solutions</p>`,70),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
