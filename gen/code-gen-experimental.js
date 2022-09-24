import { TypeCreator } from "@compas/code-gen";

/**
 * Structure for types that are user input.
 *
 * @param {App} app
 */
export function extendWithCodeGenExperimental(app) {
  const T = new TypeCreator("experimental");

  const namePart = T.string("namePart")
    .min(1)
    .pattern(/^[a-zA-Z$][a-zA-Z\d]+$/g);

  const typeDefinitionBase = {
    docString: T.string().default(`""`),
    isOptional: T.bool().default(false),
    defaultValue: T.anyOf()
      .values(T.string().min(1), T.bool(), T.number())
      .optional(),
    sql: T.object()
      .keys({
        primary: T.bool().default(false),
        searchable: T.bool().default(false),
        hasDefaultValue: T.bool().default(false),
      })
      .default(`{ primary: false, searchable: false, hasDefaultValue: false, }`)
      .loose(),
    validator: T.object().loose().default("{}"),
  };

  const namedTypeDefinitionBase = {
    group: T.string().optional(),
    name: T.string().optional(),
    ...typeDefinitionBase,
  };

  app.add(
    T.generic("structure")
      .keys(namePart)
      .values(
        T.generic()
          .keys(namePart)
          .values(T.reference("experimental", "namedTypeDefinition")),
      ),

    T.object("generateOptions")
      .keys({
        // TODO: Add link to docs with compatibility between language and runtime.
        targetLanguage: T.string().oneOf("js", "ts"),
        targetRuntime: T.string()
          .optional()
          .oneOf("node.js", "browser", "react-native")
          .docs(
            "Only applicable if your 'targetLanguage' is set to 'js' or 'ts'.",
          ),
        outputDirectory: T.string().optional(),

        // This will most likely be the only strictly validated object of the bunch.
        generators: {
          structure: T.object()
            .keys({})
            .optional()
            .docs(
              "Enable a structure dump. This way this structure can be reused vai 'Generator#addStructure",
            ),
          openApi: T.object()
            .keys({
              openApiExtensions: T.any().optional(),
              openApiRouteExtensions: T.any().optional(),
            })
            .optional()
            .docs("Enable the OpenAPI generator."),
          router: T.object()
            .keys({
              // TODO: Add link to docs with compatibility between
              //  language and target library.
              targetLibrary: T.string()
                .oneOf("koa")
                .docs(
                  "Select one of the supported libraries to generate a router for.",
                ),
              exposeApiStructure: T.bool()
                .default(false)
                .docs(
                  "Adds a Compas '_compas/structure.json' route to the generated router that includes all available routes.",
                ),
            })
            .optional()
            .docs(
              "Generate a validating router with entry points for your route handlers.",
            ),
          database: T.object()
            .keys({
              // TODO: Add link to docs with compatibility between
              //  language and target dialect / target library.
              targetDialect: T.string()
                .oneOf("postgresql")
                .docs(
                  "Select one of the supported dialects to generate queries for.",
                ),
            })
            .optional()
            .docs("Generate one of the compatible database interfaces."),
          validators: T.object()
            .keys({
              includeBaseTypes: T.bool()
                .default(false)
                .docs(
                  "Always generate validators for all named types even if no other generator needs it.",
                ),
            })
            .optional()
            .docs(
              "Alter the output of generated validators. Other generators will always include validators in their output if necessary.",
            ),
          apiClient: T.object()
            .keys({
              // TODO: Add link to docs with compatibility between
              //  language and target library.
              targetLibrary: T.string()
                .oneOf("axios")
                .docs("Select your HTTP client of choice."),
              validateResponses: T.bool()
                .default(false)
                .docs(
                  "Include validators that check the responses. This way you can be sure that the API returns what you expect.",
                ),
              globalClient: T.bool()
                .default(false)
                .docs(
                  "Use a global api client that will be used for all requests. Only applicable when using 'axios'.",
                ),

              // TODO: Add link to docs with compatibility between
              //  language and target library.
              includeWrapper: T.string()
                .oneOf("react-query")
                .optional()
                .docs(
                  "Include an API client wrapper to use the api easier with your user interface library.",
                ),
            })
            .optional()
            .docs(
              "Generate an API client, based on the routes in your structure.",
            ),
          types: T.object()
            .keys({
              useGlobalTypes: T.bool()
                .default(false)
                .docs(
                  "Declare all types in the global namespace. Only applicable when using 'targetLanguage' when set to 'js' or 'ts'.",
                ),
              useGlobalCompasTypes: T.bool()
                .default(false)
                .docs(
                  "Creates global types for types provided by Compas features. Only applicable when using 'targetLanguage' that is set to 'js' or 'ts'.",
                ),
              generateDeduplicatedTypes: T.bool()
                .default(false)
                .docs(
                  "Combine all types based that would be generated by all structures added via 'Generator#addStructure' and combine them in to a single output.",
                ),
              useDeduplicatedTypesPath: T.string()
                .optional()
                .docs(
                  "Import deduplicated types from the provided path. This should set to the same value as the 'outputDirectory' in the generate call with 'generateDeduplicatedTypes'.",
                ),
            })
            .optional()
            .docs("Alter the output of the generated types."),
        },
      })
      .loose(),

    T.anyOf("namedTypeDefinition").values(
      T.reference("experimental", "booleanDefinition"),
    ),

    T.anyOf("typeDefinition").values(
      T.reference("experimental", "namedTypeDefinition"),
      T.reference("experimental", "referenceDefinition"),
    ),

    T.object("referenceDefinition")
      .keys({
        type: "reference",
        ...typeDefinitionBase,
        reference: T.object()
          .keys({
            group: namePart,
            name: namePart,
          })
          .loose(),
      })
      .loose(),

    T.object("booleanDefinition")
      .keys({
        type: "bool",
        ...namedTypeDefinitionBase,
        oneOf: T.bool().optional(),
        validator: T.object()
          .keys({
            convert: T.bool().default(false),
            allowNull: T.bool().default(false),
          })
          .loose(),
      })
      .loose(),
  );
}
