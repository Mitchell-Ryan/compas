import{_ as n,c as s,o as a,a as t}from"./app.cf930e1c.js";const y='{"title":"Extending the CLI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Locations","slug":"locations"},{"level":2,"title":"CLI Definition","slug":"cli-definition"}],"relativePath":"features/extending-the-cli.md"}',o={},p=t(`<h1 id="extending-the-cli" tabindex="-1">Extending the CLI <a class="header-anchor" href="#extending-the-cli" aria-hidden="true">#</a></h1><p>It is possible to extend the Compas CLI in projects with custom commands. Giving your collaborators the power to do tasks with a consistent experience of discovery and error handling.</p><h2 id="locations" tabindex="-1">Locations <a class="header-anchor" href="#locations" aria-hidden="true">#</a></h2><p>The Compas CLI checks two places for extra commands: the <code>compas</code> config file, and the top level <code>scripts</code> directory.</p><p>Files in the <code>scripts</code> directory can export a cli definition and be upgraded from <code>compas run $name --script-args &quot;--arg 1</code> to <code>compas $name --arg 1</code>. This is advisable to do for any script requiring arguments to be passed. Making it consistent to document, but also validate these values.</p><p>The <code>config/compas.{js,json}</code> is loaded by the <a href="/features/config-files.html#config-loader">config loader</a>. And expects the following config object:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;cli&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commandDirectories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;./directory/relative/to/project/root&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;./and/another&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>All files in the specified directories should also export a cli definition object to be loaded. When checking if a custom file is indeed a command fails, the file is skipped. This also results in files depending on missing dependencies, like dev dependencies in production environments, not registering as a command.</p><h2 id="cli-definition" tabindex="-1">CLI Definition <a class="header-anchor" href="#cli-definition" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// Export a cliDefinition to be seen as a command.</span>
<span class="token comment">/** @type {import(&quot;@compas/cli&quot;).CliCommandDefinitionInput} */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> cliDefinition <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`compas todo\`</span>
  <span class="token comment">// requireed</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;todo&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Description that is printed in line in the command list</span>
  <span class="token comment">// required</span>
  <span class="token literal-property property">shortDescription</span><span class="token operator">:</span> <span class="token string">&quot;Manage todo items&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Used for \`compas todo --help\` or \`compas help todo\`</span>
  <span class="token literal-property property">longDescription</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Optional object</span>
  <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Prints the command help output if no sub command is passed.</span>
    <span class="token comment">// Defaults to false</span>
    <span class="token literal-property property">isCosmetic</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// When set to true, instead of matching on the name any value can be passed, i.e \`compas run generate\`, \`compas run foo\`.</span>
    <span class="token comment">// Defaults to false.</span>
    <span class="token literal-property property">isDynamic</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// When set to true, this command allows &#39;--watch&#39; and \`cli watch [command.name]\`, see &#39;watchSettings&#39; below, to tune the behaviour.</span>
    <span class="token comment">// Defaults to false.</span>
    <span class="token literal-property property">isWatchable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Optional flag array. Sub commands also allow the flags defined by their parents.</span>
  <span class="token literal-property property">flags</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// This name is used to store the value</span>
      <span class="token comment">// required</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;namespace&quot;</span><span class="token punctuation">,</span>

      <span class="token comment">// The flag name, requires to be prefixed with \`--\`</span>
      <span class="token comment">// requirered</span>
      <span class="token literal-property property">rawName</span><span class="token operator">:</span> <span class="token string">&quot;--namespace&quot;</span><span class="token punctuation">,</span>

      <span class="token comment">// Description to show in help output.</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Only return todo&#39;s in this namespace&quot;</span><span class="token punctuation">,</span>

      <span class="token comment">// Optional modifiers object</span>
      <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Make this flag required.</span>
        <span class="token literal-property property">isRequired</span><span class="token operator">:</span> <span class="token boolean">false</span>

        <span class="token comment">// This flag can be repeated, resulting in an array that is passed to the executor.</span>
        <span class="token literal-property property">isRepeatable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

        <span class="token comment">// This flag will not show up in any help output.</span>
        <span class="token literal-property property">isInternal</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// Optional value specification</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Give a type to the value that can be passed. The parser also does the conversion.</span>
        <span class="token comment">// &quot;boolean&quot; (default): accepts no value, &#39;true&#39;, &#39;1&#39;, &#39;false&#39; and &#39;0&#39;.</span>
        <span class="token comment">// &quot;number&quot; accepts any value that converts to a number</span>
        <span class="token comment">// &quot;string&quot; Accept any value.</span>
        <span class="token comment">// &quot;booleanOrString&quot; A combination of &quot;boolean&quot; and &quot;string&quot;, giving the &quot;boolean&quot; parser precedence.</span>
        <span class="token literal-property property">specification</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// Optional validator, can return a Promise.</span>
        <span class="token comment">// This example checks if the flag value is a path.</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> isValid <span class="token operator">=</span> <span class="token function">existsSync</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
              isValid<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            isValid<span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Could not find the specified file relative to the current working directory. Make sure it exists.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// Optional completions function, see below at &#39;dynamicValue.completions&#39;.</span>
        <span class="token comment">// completions: () =&gt; {},</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Optional sub commands, this is required if this command is \`modifiers.isCosmetic\`.</span>
  <span class="token literal-property property">subCommands</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// Minimal command definition</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">shortDescription</span><span class="token operator">:</span> <span class="token string">&quot;List all todo&#39;s.&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// An optional executor. If a command does not have an executor, the executor of it&#39;s (recursive) parent is used.</span>
  <span class="token literal-property property">executor</span><span class="token operator">:</span> cliExecutor<span class="token punctuation">,</span>

  <span class="token comment">// Extra properties for &#39;modifiers.isWatchable&#39; commands</span>
  <span class="token comment">// Defaults to</span>
  <span class="token comment">// { extensions: [&quot;js&quot;, &quot;json&quot;], ignorePatterns: [&quot;.cache&quot;, &quot;coverage&quot;, &quot;node_modules&quot;], }</span>
  <span class="token literal-property property">watchSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Specific extensions to watch for</span>
    <span class="token comment">// Is optional</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;json&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// Specific patterns to filter out.</span>
    <span class="token comment">// Use this if your program or another program writes files that you don&#39;t want this command to be restarted for.</span>
    <span class="token literal-property property">ignorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;.cache&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Extra prperties for &#39;modifiers.isDynamic&#39; commands</span>
  <span class="token literal-property property">dynamicValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Called when parsing the command. May return a Promise.</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isValid <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;add&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          isValid<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// Full error message: &quot;Invalid sub command &#39;xxx&#39; for &#39;compas todo&#39;. Allowed values are &#39;toggle&#39; and &#39;add&#39;.</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        isValid<span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Allowed values are &#39;toggle&#39; and &#39;add&#39;.&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Called for shell auto-complete, may return a promise.</span>
    <span class="token comment">// Depending on the shell that is used, some features may or may not work.</span>
    <span class="token function-variable function">completions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">completions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// Get directory completions</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;directory&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// Get file completions</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// A direct completion for the user</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;completion&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// A direct completion for the user</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;completion&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">// optional</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Add a new todo&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// Print message with specification and description</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">specification</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>

            <span class="token comment">// Optional</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;A todo name&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Is called when this command or a sub command is matched.
 *
 * @param {import(&quot;@compas/stdlib&quot;).Logger} logger
 * @param {import(&quot;@compas/cli&quot;).CliExecutorState} state
 * @returns {Promise&lt;import(&quot;@compas/cli&quot;).CliResult&gt;}
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cliExecutor</span><span class="token punctuation">(</span><span class="token parameter">logger<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>flags<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">exitStatus</span><span class="token operator">:</span> <span class="token string">&quot;passed&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),e=[p];function c(l,r,i,u,k,m){return a(),s("div",null,e)}var h=n(o,[["render",c]]);export{y as __pageData,h as default};
