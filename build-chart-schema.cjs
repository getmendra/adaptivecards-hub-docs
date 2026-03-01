#!/usr/bin/env node
/**
 * Extends the official Adaptive Cards 1.6.0 JSON Schema with ALL proprietary
 * Microsoft extensions: chart types, layout types, new body elements (Icon,
 * Badge, CodeBlock, CompoundButton, ProgressBar, ProgressRing, Rating,
 * Input.Rating, Carousel, Accordion, TabSet, LoopComponent), new actions
 * (Action.Popover, Action.ResetInputs, Action.RunCommands, Action.InsertImage,
 * Action.OpenUrlDialog), new inline types (CitationRun, IconRun, ImageRun),
 * helper data types, and updates to all existing definitions.
 *
 * Usage: node build-chart-schema.cjs
 * Output: adaptive-card-with-charts.json
 */

const fs = require("fs");

const BASE_SCHEMA_URL =
  "https://adaptivecards.io/schemas/1.6.0/adaptive-card.json";
const OUTPUT_FILE = "adaptive-card-with-charts.json";

// ── Load base schema ───────────────────────────────────────────────────────

let schema;
try {
  schema = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"));
  // If it already has our extended defs, re-download the base
  if (schema.definitions["Chart.Donut"]) {
    throw new Error("re-download");
  }
} catch {
  const { execSync } = require("child_process");
  execSync(`curl -sS "${BASE_SCHEMA_URL}" -o "${OUTPUT_FILE}"`);
  schema = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"));
}

// ══════════════════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════════════════

/** Case-insensitive enum: emits original, lowercase, camelCase, and PascalCase variants.
 *  For compound values with ':', also generates mixed-case variants. */
function ciEnum(values) {
  const all = new Set();
  for (const v of values) {
    all.add(v);
    all.add(v.toLowerCase());
    all.add(v.charAt(0).toLowerCase() + v.slice(1));
    all.add(v.charAt(0).toUpperCase() + v.slice(1));
    // For compound values like "atLeast:Narrow", also generate mixed variants
    if (v.includes(":")) {
      const [prefix, suffix] = v.split(":");
      const prefixVariants = [prefix, prefix.toLowerCase(), prefix.charAt(0).toUpperCase() + prefix.slice(1)];
      const suffixVariants = [suffix, suffix.toLowerCase(), suffix.charAt(0).toUpperCase() + suffix.slice(1)];
      for (const p of prefixVariants) {
        for (const s of suffixVariants) {
          all.add(`${p}:${s}`);
        }
      }
    }
  }
  return [...all];
}

/** Shorthand for a $ref. */
function ref(name) {
  return { $ref: `#/definitions/${name}` };
}

/** Standard registration entry for ImplementationsOf.* unions. */
function implEntry(name) {
  return { required: ["type"], allOf: [ref(name)] };
}

const pxPattern = "^[0-9]+(\\.[0-9]+)?px$";

// ══════════════════════════════════════════════════════════════════════════
// SHARED ENUM DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

const chartColorValues = [
  "good", "warning", "attention", "neutral",
  "categoricalRed", "categoricalPurple", "categoricalLavender",
  "categoricalBlue", "categoricalLightBlue", "categoricalTeal",
  "categoricalGreen", "categoricalLime", "categoricalMarigold",
  "sequential1", "sequential2", "sequential3", "sequential4",
  "sequential5", "sequential6", "sequential7", "sequential8",
  "divergingBlue", "divergingLightBlue", "divergingCyan",
  "divergingTeal", "divergingYellow", "divergingPeach",
  "divergingLightRed", "divergingRed", "divergingMaroon", "divergingGray",
  "sequentialRed1", "sequentialRed2", "sequentialRed3", "sequentialRed4",
  "sequentialRed5", "sequentialRed6", "sequentialRed7", "sequentialRed8",
  "sequentialGreen1", "sequentialGreen2", "sequentialGreen3", "sequentialGreen4",
  "sequentialGreen5", "sequentialGreen6", "sequentialGreen7", "sequentialGreen8",
  "sequentialYellow1", "sequentialYellow2", "sequentialYellow3", "sequentialYellow4",
  "sequentialYellow5", "sequentialYellow6", "sequentialYellow7", "sequentialYellow8",
];

const ChartColor = {
  type: "string",
  description: "A well-known chart color name. See Chart colors reference.",
  enum: chartColorValues,
};

const ChartColorSet = {
  type: "string",
  description:
    "The name of the set of colors to use to render the chart. See Chart colors reference.",
  enum: ciEnum([
    "categorical", "sequential", "sequentialred",
    "sequentialgreen", "sequentialyellow", "diverging",
  ]),
};

const TargetWidthEnum = {
  type: "string",
  description: "Controls for which card width the element should be displayed.",
  enum: ciEnum([
    "VeryNarrow", "Narrow", "Standard", "Wide",
    "atLeast:VeryNarrow", "atMost:VeryNarrow",
    "atLeast:Narrow", "atMost:Narrow",
    "atLeast:Standard", "atMost:Standard",
    "atLeast:Wide", "atMost:Wide",
  ]),
};

const IconColorEnum = {
  type: "string",
  enum: ciEnum(["Default", "Dark", "Light", "Accent", "Good", "Warning", "Attention"]),
};

const IconSizeEnum = {
  type: "string",
  enum: ciEnum(["xxSmall", "xSmall", "Small", "Standard", "Medium", "Large", "xLarge", "xxLarge"]),
};

const DocumentReferenceIconEnum = {
  type: "string",
  enum: [
    "msWord", "msExcel", "msPowerPoint", "msOneNote", "msSharePoint",
    "msVisio", "msLoop", "msWhiteboard", "code", "sketch",
    "adobeIllustrator", "adobePhotoshop", "adobeInDesign", "adobeFlash",
    "image", "gif", "video", "sound", "zip", "text", "pdf",
  ],
};

// ══════════════════════════════════════════════════════════════════════════
// UPDATE EXISTING ENUM DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

// ── ContainerStyle: ensure "warning" is present ────────────────────────────
// The base schema already has default, emphasis, good, attention, warning,
// accent. We replace the definition to use ciEnum for consistency.
schema.definitions["ContainerStyle"] = {
  anyOf: [
    { enum: ciEnum(["default", "emphasis", "accent", "good", "attention", "warning"]) },
  ],
};

// ── ImageStyle: add "RoundedCorners" ───────────────────────────────────────
schema.definitions["ImageStyle"] = {
  description: "Controls how this `Image` is displayed.",
  anyOf: [
    { enum: ciEnum(["default", "person", "RoundedCorners"]) },
  ],
};

// ══════════════════════════════════════════════════════════════════════════
// COMMON PROPERTY SETS
// ══════════════════════════════════════════════════════════════════════════

/** Common element props mixed into every body element definition. */
const commonElementProps = {
  "grid.area": { type: "string", description: "The area of a Layout.AreaGrid layout in which an element should be displayed." },
  isSortKey: { type: "boolean", description: "Controls whether the element should be used as a sort key.", default: false },
  "isVisible.dynamic": { type: "string", description: "Defines an expression whose evaluated value will be used to update the isVisible property at runtime." },
  key: { type: "string", description: "Defines an optional key for the object." },
  lang: { type: "string", description: "The locale associated with the element." },
  targetWidth: { ...TargetWidthEnum },
  horizontalAlignment: {
    anyOf: [ref("HorizontalAlignment"), { type: "null" }],
    description: "Controls how the element should be horizontally aligned.",
  },
  fallback: {},
  height: {},
  separator: {},
  spacing: {},
  id: {},
  isVisible: {},
  requires: {},
};

/** Common action props mixed into every action definition. */
const commonActionProps = {
  fallback: {},
  iconUrl: {},
  id: {},
  style: {},
  requires: {},
  title: {},
  tooltip: {},
  isEnabled: { type: "boolean", description: "Determines whether the action should be enabled.", default: true },
  "isEnabled.dynamic": { type: "string", description: "Expression to dynamically control isEnabled." },
  isVisible: { type: "boolean", description: "If false, this action will be removed from the visual tree.", default: true },
  "isVisible.dynamic": { type: "string", description: "Expression to dynamically control isVisible." },
  key: { type: "string", description: "Defines an optional key for the object." },
  mode: { type: "string", enum: ciEnum(["primary", "secondary"]), default: "primary" },
  themedIconUrls: { type: "array", items: ref("ThemedUrl") },
  "title.dynamic": { type: "string", description: "Expression to dynamically set the title." },
  "tooltip.dynamic": { type: "string", description: "Expression to dynamically set the tooltip." },
};

/** Container content props used by Container, Column, CarouselPage, AccordionPage, TabPage, TableCell. */
const containerContentProps = {
  backgroundImage: {
    anyOf: [ref("BackgroundImage"), { type: "string", format: "uri-reference" }],
    description: "Specifies the background image.",
  },
  layouts: { type: "array", items: ref("ImplementationsOf.Layout"), description: "The layouts to apply." },
  maxHeight: { type: "string", description: "The maximum height in pixels.", pattern: pxPattern },
  minHeight: { type: "string", description: "The minimum height in pixels.", pattern: pxPattern },
  roundedCorners: { type: "boolean", description: "If true, display with rounded corners.", default: false },
  rtl: { anyOf: [{ type: "boolean" }, { type: "null" }], description: "When true, content should be presented right to left." },
  selectAction: { ...ref("ImplementationsOf.ISelectAction"), description: "An Action invoked when tapped or selected." },
  showBorder: { type: "boolean", description: "If true, display a border.", default: false },
  style: ref("ContainerStyle"),
  verticalContentAlignment: {
    anyOf: [ref("VerticalContentAlignment"), { type: "null" }],
    description: "Defines how content should be aligned vertically.",
  },
  bleed: { type: "boolean", description: "Determines whether the element should bleed through its parent's padding.", default: false },
};

// ══════════════════════════════════════════════════════════════════════════
// ELEMENT / ACTION DEFINITION FACTORIES
// ══════════════════════════════════════════════════════════════════════════

/**
 * Creates a body element definition.
 * Sets up type enum, merges specificProps with commonElementProps,
 * sets additionalProperties: false, and adds allOf Extendable.Element.
 */
function makeElementDef(typeString, description, specificProps) {
  return {
    description,
    properties: {
      type: { enum: [typeString], description: `Must be \`${typeString}\`` },
      ...specificProps,
      ...commonElementProps,
    },
    type: "object",
    additionalProperties: false,
    allOf: [ref("Extendable.Element")],
  };
}

/**
 * Creates an action definition.
 * Sets up type enum, merges specificProps with commonActionProps,
 * sets additionalProperties: false, and adds allOf Extendable.Action.
 */
function makeActionDef(typeString, description, specificProps) {
  return {
    description,
    properties: {
      type: { enum: [typeString], description: `Must be \`${typeString}\`` },
      ...specificProps,
      ...commonActionProps,
    },
    type: "object",
    additionalProperties: false,
    allOf: [ref("Extendable.Action")],
  };
}

/** Creates a chart element definition (specialized makeElementDef for charts). */
const chartBaseProperties = {
  title: { type: "string", description: "The title of the chart.", version: "1.5" },
  showTitle: { type: "boolean", description: "Controls whether the chart's title should be displayed.", default: false, version: "1.5" },
  colorSet: { ...ChartColorSet, version: "1.5" },
  maxWidth: { type: "string", description: "The maximum width of the chart in the <number>px format.", pattern: pxPattern, version: "1.5" },
  showLegend: { type: "boolean", description: "Controls whether the chart's legend should be displayed.", default: true, version: "1.5" },
  ...commonElementProps,
};

const chartWithAxisProperties = {
  xAxisTitle: { type: "string", description: "The title of the x axis.", version: "1.5" },
  yAxisTitle: { type: "string", description: "The title of the y axis.", version: "1.5" },
  color: { ...ChartColor, description: "The color to use for all data points.", version: "1.5" },
};

function makeChartDef(typeString, description, specificProps) {
  return {
    description,
    version: "1.5",
    properties: {
      type: { enum: [typeString], description: `Must be \`${typeString}\`` },
      ...specificProps,
      ...chartBaseProperties,
    },
    type: "object",
    additionalProperties: false,
    allOf: [ref("Extendable.Element")],
  };
}

// ══════════════════════════════════════════════════════════════════════════
// HELPER / DATA TYPE DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

// ── ThemedUrl ──────────────────────────────────────────────────────────────
schema.definitions["ThemedUrl"] = {
  description: "A themed URL with optional theme discriminator.",
  type: "object",
  properties: {
    theme: { type: "string", enum: ["Light", "Dark"], default: "Light" },
    url: { type: "string" },
    key: { type: "string" },
  },
  additionalProperties: false,
};

// ── IconInfo ───────────────────────────────────────────────────────────────
schema.definitions["IconInfo"] = {
  description: "Describes an icon by name with color, size, and style options.",
  type: "object",
  properties: {
    color: { ...IconColorEnum, default: "Default" },
    name: { type: "string" },
    size: { type: "string", enum: ciEnum(["xxSmall", "xSmall", "Small", "Standard", "Medium", "Large", "xLarge", "xxLarge"]), default: "xSmall" },
    style: { type: "string", enum: ciEnum(["Regular", "Filled"]), default: "Regular" },
    key: { type: "string" },
  },
  additionalProperties: false,
};

// ── GridArea ───────────────────────────────────────────────────────────────
schema.definitions["GridArea"] = {
  description: "Defines an area within a Layout.AreaGrid.",
  type: "object",
  properties: {
    column: { type: "number", default: 1 },
    columnSpan: { type: "number", default: 1 },
    name: { type: "string" },
    row: { type: "number", default: 1 },
    rowSpan: { type: "number", default: 1 },
    key: { type: "string" },
  },
  additionalProperties: false,
};

// ── DocumentReference ──────────────────────────────────────────────────────
schema.definitions["DocumentReference"] = {
  description: "A reference to an external document.",
  type: "object",
  properties: {
    type: { enum: ["DocumentReference"], description: 'Must be `"DocumentReference"`' },
    abstract: { type: "string" },
    icon: { ...DocumentReferenceIconEnum },
    key: { type: "string" },
    keywords: { type: "array", items: { type: "string" } },
    title: { type: "string" },
    url: { type: "string" },
  },
  additionalProperties: false,
};

// ── AdaptiveCardReference ──────────────────────────────────────────────────
schema.definitions["AdaptiveCardReference"] = {
  description: "A reference to an Adaptive Card with optional inline content.",
  type: "object",
  properties: {
    type: { enum: ["AdaptiveCardReference"], description: 'Must be `"AdaptiveCardReference"`' },
    abstract: { type: "string" },
    content: { type: "object" },
    icon: { ...DocumentReferenceIconEnum },
    key: { type: "string" },
    keywords: { type: "array", items: { type: "string" } },
    title: { type: "string" },
    url: { type: "string" },
  },
  additionalProperties: false,
};

// ══════════════════════════════════════════════════════════════════════════
// CHART DATA TYPE DEFINITIONS (unchanged from original)
// ══════════════════════════════════════════════════════════════════════════

schema.definitions["DonutChartData"] = {
  description: "A data point in a donut or pie chart.",
  type: "object",
  properties: {
    legend: { type: "string", description: "The legend label for this data point." },
    value: { type: "number", description: "The numeric value of this data point.", default: 0 },
    color: { ...ChartColor, description: "The color to use for this data point. Overrides the colorSet if specified." },
  },
  required: ["legend", "value"],
  additionalProperties: false,
};

schema.definitions["VerticalBarChartDataValue"] = {
  description: "A data point in a vertical bar chart.",
  type: "object",
  properties: {
    x: { anyOf: [{ type: "string" }, { type: "number" }], description: "The x-axis value (category label or numeric value)." },
    y: { type: "number", description: "The y-axis value.", default: 0 },
    color: { ...ChartColor, description: "The color to use for this bar." },
  },
  required: ["x", "y"],
  additionalProperties: false,
};

schema.definitions["GroupedVerticalBarChartDataValue"] = {
  description: "A data point within a grouped vertical bar series.",
  type: "object",
  properties: {
    x: { type: "string", description: "The x-axis category label." },
    y: { type: "number", description: "The y-axis value.", default: 0 },
  },
  required: ["x", "y"],
  additionalProperties: false,
};

schema.definitions["GroupedVerticalBarChartData"] = {
  description: "A data series in a grouped vertical bar chart.",
  type: "object",
  properties: {
    legend: { type: "string", description: "The legend label for this series." },
    values: { type: "array", items: ref("GroupedVerticalBarChartDataValue"), description: "The data points in this series." },
    color: { ...ChartColor, description: "The color to use for this series." },
  },
  required: ["legend", "values"],
  additionalProperties: false,
};

schema.definitions["HorizontalBarChartDataValue"] = {
  description: "A data point in a horizontal bar chart.",
  type: "object",
  properties: {
    x: { type: "string", description: "The category label." },
    y: { type: "number", description: "The numeric value.", default: 0 },
    color: { ...ChartColor, description: "The color to use for this bar." },
  },
  required: ["x", "y"],
  additionalProperties: false,
};

schema.definitions["StackedHorizontalBarChartDataPoint"] = {
  description: "A data point within a stacked horizontal bar segment.",
  type: "object",
  properties: {
    legend: { type: "string", description: "The legend label for this segment." },
    value: { type: "number", description: "The numeric value of this segment.", default: 0 },
    color: { ...ChartColor, description: "The color to use for this segment." },
  },
  required: ["legend", "value"],
  additionalProperties: false,
};

schema.definitions["StackedHorizontalBarChartData"] = {
  description: "A row in a stacked horizontal bar chart.",
  type: "object",
  properties: {
    title: { type: "string", description: "The title/label for this row." },
    data: { type: "array", items: ref("StackedHorizontalBarChartDataPoint"), description: "The stacked segments in this row." },
  },
  required: ["title", "data"],
  additionalProperties: false,
};

schema.definitions["LineChartDataValue"] = {
  description: "A data point in a line chart series.",
  type: "object",
  properties: {
    x: { anyOf: [{ type: "string" }, { type: "number" }], description: "The x-axis value." },
    y: { type: "number", description: "The y-axis value.", default: 0 },
  },
  required: ["x", "y"],
  additionalProperties: false,
};

schema.definitions["LineChartData"] = {
  description: "A data series in a line chart.",
  type: "object",
  properties: {
    legend: { type: "string", description: "The legend label for this line series." },
    values: { type: "array", items: ref("LineChartDataValue"), description: "The data points in this series." },
    color: { ...ChartColor, description: "The color to use for this line." },
  },
  required: ["legend", "values"],
  additionalProperties: false,
};

schema.definitions["GaugeChartSegment"] = {
  description: "A segment in a gauge chart.",
  type: "object",
  properties: {
    legend: { type: "string", description: "The legend label for this segment." },
    size: { type: "number", description: "The proportional size of this segment.", default: 0 },
    color: { ...ChartColor, description: "The color to use for this segment." },
  },
  required: ["size"],
  additionalProperties: false,
};

// ══════════════════════════════════════════════════════════════════════════
// LAYOUT TYPE DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

schema.definitions["Layout.Stack"] = {
  description: "A simple stack layout (default).",
  type: "object",
  properties: {
    type: { enum: ["Layout.Stack"], description: 'Must be `"Layout.Stack"`' },
    key: { type: "string" },
    targetWidth: { ...TargetWidthEnum },
  },
  additionalProperties: false,
};

schema.definitions["Layout.Flow"] = {
  description: "A flow layout that wraps items into rows.",
  type: "object",
  properties: {
    type: { enum: ["Layout.Flow"], description: 'Must be `"Layout.Flow"`' },
    columnSpacing: { ...ref("Spacing"), default: "Default" },
    horizontalItemsAlignment: { type: "string", enum: ciEnum(["Left", "Center", "Right"]), default: "Center" },
    itemFit: { type: "string", enum: ciEnum(["Fit", "Fill"]), default: "Fit" },
    itemWidth: { type: "string", pattern: pxPattern },
    maxItemWidth: { type: "string", pattern: pxPattern },
    minItemWidth: { type: "string", default: "0" },
    rowSpacing: { ...ref("Spacing"), default: "Default" },
    verticalItemsAlignment: { type: "string", enum: ciEnum(["Top", "Center", "Bottom"]), default: "Top" },
    key: { type: "string" },
    targetWidth: { ...TargetWidthEnum },
  },
  additionalProperties: false,
};

schema.definitions["Layout.AreaGrid"] = {
  description: "A grid layout based on named areas.",
  type: "object",
  properties: {
    type: { enum: ["Layout.AreaGrid"], description: 'Must be `"Layout.AreaGrid"`' },
    areas: { type: "array", items: ref("GridArea") },
    columns: { type: "array", items: { anyOf: [{ type: "number" }, { type: "string" }] } },
    columnSpacing: { ...ref("Spacing"), default: "Default" },
    rowSpacing: { ...ref("Spacing"), default: "Default" },
    key: { type: "string" },
    targetWidth: { ...TargetWidthEnum },
  },
  additionalProperties: false,
};

schema.definitions["ImplementationsOf.Layout"] = {
  anyOf: [
    implEntry("Layout.Stack"),
    implEntry("Layout.Flow"),
    implEntry("Layout.AreaGrid"),
  ],
};

// ══════════════════════════════════════════════════════════════════════════
// CHART TYPE DEFINITIONS (unchanged from original)
// ══════════════════════════════════════════════════════════════════════════

schema.definitions["Chart.Donut"] = makeChartDef("Chart.Donut", "A donut chart.", {
  data: { type: "array", items: ref("DonutChartData"), description: "The data to display in the chart.", version: "1.5" },
  value: { type: "string", description: "The value that should be displayed in the center of the donut chart.", version: "1.5" },
  valueColor: { ...ChartColor, description: "Controls the color of the value displayed in the center of the donut chart.", version: "1.5" },
  thickness: { type: "string", description: "Controls the thickness of the donut segments. Default is Thick.", enum: ciEnum(["Thin", "Thick"]), version: "1.5" },
  showOutlines: { type: "boolean", description: "Controls whether the outlines of the donut segments are displayed.", default: true, version: "1.5" },
});

schema.definitions["Chart.Pie"] = makeChartDef("Chart.Pie", "A pie chart.", {
  data: { type: "array", items: ref("DonutChartData"), description: "The data to display in the chart.", version: "1.5" },
  value: { type: "string", description: "The value that should be displayed in the center of a Donut chart. value is ignored for Pie charts.", version: "1.5" },
  valueColor: { ...ChartColor, description: "Controls the color of the value displayed in the center of a Donut chart.", version: "1.5" },
  thickness: { type: "string", description: "Controls the thickness of the donut segments. Default is Thick.", enum: ciEnum(["Thin", "Thick"]), version: "1.5" },
  showOutlines: { type: "boolean", description: "Controls whether the outlines of the donut segments are displayed.", default: true, version: "1.5" },
});

schema.definitions["Chart.VerticalBar"] = makeChartDef("Chart.VerticalBar", "A vertical bar chart.", {
  ...chartWithAxisProperties,
  data: { type: "array", items: ref("VerticalBarChartDataValue"), description: "The data to display in the chart.", version: "1.5" },
  showBarValues: { type: "boolean", description: "Controls if the bar values should be displayed.", default: false, version: "1.5" },
  yMin: { type: "number", description: "The requested minimum for the Y axis range.", version: "1.5" },
  yMax: { type: "number", description: "The requested maximum for the Y axis range.", version: "1.5" },
});

schema.definitions["Chart.VerticalBar.Grouped"] = makeChartDef("Chart.VerticalBar.Grouped", "A grouped vertical bar chart.", {
  ...chartWithAxisProperties,
  data: { type: "array", items: ref("GroupedVerticalBarChartData"), description: "The data point series.", version: "1.5" },
  stacked: { type: "boolean", description: "Controls if bars should be displayed as stacks instead of groups.", default: false, version: "1.5" },
  showBarValues: { type: "boolean", description: "Controls if values should be displayed on each bar.", default: false, version: "1.5" },
  yMin: { type: "number", description: "The requested minimum for the Y axis range. Ignored if stacked is true.", version: "1.5" },
  yMax: { type: "number", description: "The requested maximum for the Y axis range. Ignored if stacked is true.", version: "1.5" },
});

schema.definitions["Chart.HorizontalBar"] = makeChartDef("Chart.HorizontalBar", "A horizontal bar chart.", {
  ...chartWithAxisProperties,
  data: { type: "array", items: ref("HorizontalBarChartDataValue"), description: "The data points in the chart.", version: "1.5" },
  displayMode: { type: "string", description: "Controls how the chart should be visually laid out.", enum: ciEnum(["AbsoluteWithAxis", "AbsoluteNoAxis", "PartToWhole"]), default: "AbsoluteWithAxis", version: "1.5" },
});

schema.definitions["Chart.HorizontalBar.Stacked"] = makeChartDef("Chart.HorizontalBar.Stacked", "A stacked horizontal bar chart.", {
  ...chartWithAxisProperties,
  data: { type: "array", items: ref("StackedHorizontalBarChartData"), description: "The data to display in the chart.", version: "1.5" },
});

schema.definitions["Chart.Line"] = makeChartDef("Chart.Line", "A line chart.", {
  ...chartWithAxisProperties,
  data: { type: "array", items: ref("LineChartData"), description: "The data point series in the line chart.", version: "1.5" },
  yMin: { type: "number", description: "The minimum y range.", version: "1.5" },
  yMax: { type: "number", description: "The maximum y range.", version: "1.5" },
});

schema.definitions["Chart.Gauge"] = makeChartDef("Chart.Gauge", "A gauge chart.", {
  min: { type: "number", description: "The minimum value of the gauge.", default: 0, version: "1.5" },
  max: { type: "number", description: "The maximum value of the gauge.", version: "1.5" },
  value: { type: "number", description: "The value of the gauge.", default: 0, version: "1.5" },
  valueFormat: { type: "string", description: "The format used to display the gauge's value.", enum: ciEnum(["Percentage", "Fraction"]), default: "Percentage", version: "1.5" },
  subLabel: { type: "string", description: "The sub-label of the gauge.", version: "1.5" },
  segments: { type: "array", items: ref("GaugeChartSegment"), description: "The segments to display in the gauge.", version: "1.5" },
  showMinMax: { type: "boolean", description: "Controls whether the min/max values should be displayed.", default: true, version: "1.5" },
  showNeedle: { type: "boolean", description: "Controls whether the gauge's needle is displayed.", default: true, version: "1.5" },
  showOutlines: { type: "boolean", description: "Controls whether the outlines of the gauge segments are displayed.", default: true, version: "1.5" },
});

// ══════════════════════════════════════════════════════════════════════════
// NEW BODY ELEMENT DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

// ── Icon ───────────────────────────────────────────────────────────────────
schema.definitions["Icon"] = makeElementDef("Icon", "Displays a Fluent icon.", {
  color: { ...IconColorEnum, default: "Default" },
  name: { type: "string", description: "The name of the Fluent icon." },
  selectAction: { ...ref("ImplementationsOf.ISelectAction"), description: "Action invoked when the icon is tapped." },
  size: { type: "string", enum: ciEnum(["xxSmall", "xSmall", "Small", "Standard", "Medium", "Large", "xLarge", "xxLarge"]), default: "Standard" },
  style: { type: "string", enum: ciEnum(["Regular", "Filled"]), default: "Regular" },
});

// ── Badge ──────────────────────────────────────────────────────────────────
schema.definitions["Badge"] = makeElementDef("Badge", "Displays a badge element.", {
  appearance: { type: "string", enum: ciEnum(["Filled", "Tint"]), default: "Filled" },
  icon: { type: "string", description: "The icon name for the badge." },
  iconPosition: { type: "string", enum: ciEnum(["Before", "After"]), default: "Before" },
  shape: { type: "string", enum: ciEnum(["Square", "Rounded", "Circular"]), default: "Circular" },
  size: { type: "string", enum: ciEnum(["Medium", "Large", "ExtraLarge"]), default: "Medium" },
  style: { type: "string", enum: ciEnum(["Default", "Subtle", "Informative", "Accent", "Good", "Attention", "Warning"]), default: "Default" },
  text: { type: "string", description: "The text to display in the badge." },
  tooltip: { type: "string", description: "Tooltip text." },
});

// ── CodeBlock ──────────────────────────────────────────────────────────────
schema.definitions["CodeBlock"] = makeElementDef("CodeBlock", "Displays a block of code with syntax highlighting.", {
  codeSnippet: { type: "string", description: "The code to display." },
  language: {
    type: "string",
    enum: ciEnum([
      "Bash", "C", "Cpp", "CSharp", "Css", "Dos", "Go", "Graphql", "Html",
      "Java", "JavaScript", "Json", "ObjectiveC", "Perl", "Php", "PlainText",
      "PowerShell", "Python", "Sql", "TypeScript", "VbNet", "Verilog", "Vhdl", "Xml",
    ]),
    default: "PlainText",
  },
  startLineNumber: { type: "number", description: "The starting line number.", default: 1 },
});

// ── CompoundButton ─────────────────────────────────────────────────────────
schema.definitions["CompoundButton"] = makeElementDef("CompoundButton", "A compound button with title, description, icon, and badge.", {
  badge: { type: "string", description: "Badge text." },
  description: { type: "string", description: "Secondary description text." },
  icon: { ...ref("IconInfo"), description: "The icon to display." },
  selectAction: { ...ref("ImplementationsOf.ISelectAction"), description: "Action invoked when the button is tapped." },
  title: { type: "string", description: "The primary title text." },
});

// ── ProgressBar ────────────────────────────────────────────────────────────
schema.definitions["ProgressBar"] = makeElementDef("ProgressBar", "Displays a progress bar.", {
  color: { type: "string", enum: ciEnum(["Accent", "Good", "Warning", "Attention"]), default: "Accent" },
  max: { type: "number", description: "The maximum value.", default: 100 },
  value: { type: "number", description: "The current value." },
});

// ── ProgressRing ───────────────────────────────────────────────────────────
schema.definitions["ProgressRing"] = makeElementDef("ProgressRing", "Displays a progress ring (spinner).", {
  label: { type: "string", description: "The label text." },
  labelPosition: { type: "string", enum: ciEnum(["Before", "After", "Above", "Below"]), default: "Below" },
  size: { type: "string", enum: ciEnum(["Tiny", "Small", "Medium", "Large"]), default: "Medium" },
});

// ── Rating (read-only) ────────────────────────────────────────────────────
schema.definitions["Rating"] = makeElementDef("Rating", "Displays a read-only rating.", {
  color: { type: "string", enum: ciEnum(["Neutral", "Marigold"]), default: "Neutral" },
  count: { type: "number", description: "The count of ratings." },
  max: { type: "number", description: "The maximum rating value.", default: 5 },
  size: { type: "string", enum: ciEnum(["Medium", "Large"]), default: "Large" },
  style: { type: "string", enum: ciEnum(["Default", "Compact"]), default: "Default" },
  value: { type: "number", description: "The current rating value." },
});

// ── Input.Rating (input element) ──────────────────────────────────────────
schema.definitions["Input.Rating"] = makeElementDef("Input.Rating", "An input element for collecting a star rating.", {
  allowHalfSteps: { type: "boolean", description: "If true, allow half-step ratings.", default: false },
  color: { type: "string", enum: ciEnum(["Neutral", "Marigold"]), default: "Neutral" },
  max: { type: "number", description: "The maximum rating value.", default: 5 },
  size: { type: "string", enum: ciEnum(["Medium", "Large"]), default: "Large" },
  value: { type: "number", description: "The current rating value." },
  errorMessage: { type: "string", description: "Error message to display when validation fails." },
  isRequired: { type: "boolean", description: "Whether a value is required.", default: false },
  label: { type: "string", description: "Label for this input." },
  valueChangedAction: { ...ref("ImplementationsOf.Action"), description: "Action invoked when the value changes." },
});

// ── CarouselPage ───────────────────────────────────────────────────────────
// CarouselPage uses a subset of commonElementProps (no height/separator/spacing)
schema.definitions["CarouselPage"] = {
  description: "A single page within a Carousel.",
  type: "object",
  properties: {
    type: { enum: ["CarouselPage"], description: 'Must be `"CarouselPage"`' },
    items: { type: "array", items: ref("ImplementationsOf.Element"), description: "The card elements to render inside this page." },
    ...containerContentProps,
    // Subset of element props (no height, separator, spacing)
    fallback: {},
    "grid.area": { type: "string" },
    id: {},
    isSortKey: { type: "boolean", default: false },
    isVisible: {},
    "isVisible.dynamic": { type: "string" },
    key: { type: "string" },
    lang: { type: "string" },
    requires: {},
    targetWidth: { ...TargetWidthEnum },
  },
  additionalProperties: false,
  allOf: [ref("Extendable.Element")],
};

// ── Carousel ───────────────────────────────────────────────────────────────
schema.definitions["Carousel"] = makeElementDef("Carousel", "Displays a carousel of pages.", {
  pages: { type: "array", items: ref("CarouselPage"), description: "The pages in the carousel." },
  pageAnimation: { type: "string", enum: ciEnum(["Slide", "CrossFade", "None"]), default: "Slide" },
  bleed: { type: "boolean", description: "Determines whether the element should bleed through its parent's padding.", default: false },
  minHeight: { type: "string", description: "Minimum height in pixels.", pattern: pxPattern },
});

// ── AccordionPage ──────────────────────────────────────────────────────────
schema.definitions["AccordionPage"] = {
  description: "A single page within an Accordion.",
  type: "object",
  properties: {
    type: { enum: ["AccordionPage"], description: 'Must be `"AccordionPage"`' },
    expandIconPosition: { type: "string", enum: ciEnum(["Start", "Inline", "End"]), default: "Start" },
    headerIconName: { type: "string", description: "The icon name for the header." },
    headerSize: { type: "string", enum: ciEnum(["Small", "Medium", "Large", "XLarge"]), default: "Medium" },
    headerTitle: { type: "string", description: "The title shown in the accordion header." },
    headerWrap: { type: "boolean", description: "Whether the header text wraps.", default: true },
    isExpanded: { type: "boolean", description: "Whether this page is initially expanded.", default: false },
    items: { type: "array", items: ref("ImplementationsOf.Element"), description: "The card elements to render inside this page." },
    ...containerContentProps,
    ...commonElementProps,
  },
  additionalProperties: false,
  allOf: [ref("Extendable.Element")],
};

// ── Accordion ──────────────────────────────────────────────────────────────
schema.definitions["Accordion"] = makeElementDef("Accordion", "An accordion control with expandable/collapsible pages.", {
  allowCollapseAllPages: { type: "boolean", description: "Whether all pages can be collapsed.", default: true },
  allowMultipleExpandedPages: { type: "boolean", description: "Whether multiple pages can be expanded simultaneously.", default: false },
  pages: { type: "array", items: ref("AccordionPage"), description: "The accordion pages." },
  minHeight: { type: "string", description: "Minimum height in pixels.", pattern: pxPattern },
});

// ── TabPage ────────────────────────────────────────────────────────────────
schema.definitions["TabPage"] = {
  description: "A single tab page within a TabSet.",
  type: "object",
  properties: {
    type: { enum: ["TabPage"], description: 'Must be `"TabPage"`' },
    iconName: { type: "string", description: "The icon name for the tab." },
    items: { type: "array", items: ref("ImplementationsOf.Element"), description: "The card elements to render inside this tab page." },
    tabStyle: { type: "string", enum: ciEnum(["IconOnly", "IconAndText"]), default: "IconAndText" },
    title: { type: "string", description: "The title of the tab." },
    ...containerContentProps,
    ...commonElementProps,
  },
  additionalProperties: false,
  allOf: [ref("Extendable.Element")],
};

// ── TabSet ─────────────────────────────────────────────────────────────────
schema.definitions["TabSet"] = makeElementDef("TabSet", "A tabbed container.", {
  pages: { type: "array", items: ref("TabPage"), description: "The tab pages." },
  size: { type: "string", enum: ciEnum(["Small", "Medium", "Large"]), default: "Medium" },
  bleed: { type: "boolean", description: "Determines whether the element should bleed through its parent's padding.", default: false },
  minHeight: { type: "string", description: "Minimum height in pixels.", pattern: pxPattern },
});

// ── LoopComponent ──────────────────────────────────────────────────────────
schema.definitions["LoopComponent"] = makeElementDef("LoopComponent", "Embeds a Microsoft Loop component.", {
  componentUrl: { type: "string", description: "The URL of the Loop component to embed." },
});

// ══════════════════════════════════════════════════════════════════════════
// NEW ACTION TYPE DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

// ── Action.Popover ─────────────────────────────────────────────────────────
schema.definitions["Action.Popover"] = makeActionDef("Action.Popover", "Displays a popover with content.", {
  content: { ...ref("ImplementationsOf.Element"), description: "The content to display in the popover." },
  displayArrow: { type: "boolean", description: "Whether to display an arrow pointing to the trigger.", default: true },
  maxPopoverWidth: { type: "string", description: "Maximum width of the popover.", pattern: pxPattern },
  popoverTitle: { type: "string", description: "Title of the popover." },
  position: { type: "string", enum: ciEnum(["Above", "Below", "Before", "After"]), default: "Above" },
});

// ── Action.ResetInputs ────────────────────────────────────────────────────
schema.definitions["Action.ResetInputs"] = makeActionDef("Action.ResetInputs", "Resets input fields to their default values.", {
  targetInputIds: { type: "array", items: { type: "string" }, description: "IDs of inputs to reset." },
  menuActions: { type: "array", items: ref("ImplementationsOf.Action"), description: "Sub-menu actions." },
});

// ── Action.RunCommands ────────────────────────────────────────────────────
schema.definitions["Action.RunCommands"] = makeActionDef("Action.RunCommands", "Runs a set of commands.", {
  commands: { type: "array", items: { type: "string" }, description: "The commands to run." },
  onFailure: { type: "string", description: "Command to run on failure." },
  menuActions: { type: "array", items: ref("ImplementationsOf.Action"), description: "Sub-menu actions." },
});

// ── Action.InsertImage ────────────────────────────────────────────────────
schema.definitions["Action.InsertImage"] = makeActionDef("Action.InsertImage", "Inserts an image into the content.", {
  url: { type: "string", description: "The URL of the image to insert." },
  altText: { type: "string", description: "Alternate text for the image." },
  insertPosition: { type: "string", enum: ciEnum(["Selection", "Top", "Bottom"]), default: "Selection" },
  menuActions: { type: "array", items: ref("ImplementationsOf.Action"), description: "Sub-menu actions." },
});

// ── Action.OpenUrlDialog ──────────────────────────────────────────────────
schema.definitions["Action.OpenUrlDialog"] = makeActionDef("Action.OpenUrlDialog", "Opens a URL in a dialog/modal.", {
  url: { type: "string", description: "The URL to open in the dialog." },
  dialogHeight: { type: "string", description: "The height of the dialog." },
  dialogTitle: { type: "string", description: "The title of the dialog." },
  dialogWidth: { type: "string", description: "The width of the dialog." },
  menuActions: { type: "array", items: ref("ImplementationsOf.Action"), description: "Sub-menu actions." },
});

// ══════════════════════════════════════════════════════════════════════════
// NEW INLINE TYPE DEFINITIONS (for RichTextBlock)
// ══════════════════════════════════════════════════════════════════════════

// ── CitationRun ────────────────────────────────────────────────────────────
schema.definitions["CitationRun"] = {
  description: "A citation inline element within a RichTextBlock.",
  type: "object",
  properties: {
    type: { enum: ["CitationRun"], description: 'Must be `"CitationRun"`' },
    referenceIndex: { type: "number", description: "The index of the referenced citation." },
    text: { type: "string", description: "The display text." },
    "text.dynamic": { type: "string", description: "Expression for dynamic text." },
    fallback: {
      anyOf: [ref("ImplementationsOf.Element"), ref("FallbackOption")],
    },
    id: { type: "string" },
    key: { type: "string" },
  },
  additionalProperties: false,
};

// ── IconRun ────────────────────────────────────────────────────────────────
schema.definitions["IconRun"] = {
  description: "An inline icon within a RichTextBlock.",
  type: "object",
  properties: {
    type: { enum: ["IconRun"], description: 'Must be `"IconRun"`' },
    color: { ...IconColorEnum, default: "Default" },
    name: { type: "string", description: "The Fluent icon name." },
    selectAction: { ...ref("ImplementationsOf.ISelectAction") },
    size: { type: "string", enum: ciEnum(["Small", "Default", "Medium", "Large", "ExtraLarge"]), default: "Default" },
    style: { type: "string", enum: ciEnum(["Regular", "Filled"]), default: "Regular" },
    fallback: {
      anyOf: [ref("ImplementationsOf.Element"), ref("FallbackOption")],
    },
    id: { type: "string" },
    isSortKey: { type: "boolean" },
    isVisible: { type: "boolean" },
    "isVisible.dynamic": { type: "string" },
    key: { type: "string" },
    lang: { type: "string" },
  },
  additionalProperties: false,
};

// ── ImageRun ───────────────────────────────────────────────────────────────
schema.definitions["ImageRun"] = {
  description: "An inline image within a RichTextBlock.",
  type: "object",
  properties: {
    type: { enum: ["ImageRun"], description: 'Must be `"ImageRun"`' },
    selectAction: { ...ref("ImplementationsOf.ISelectAction") },
    size: { type: "string", enum: ciEnum(["Small", "Default", "Medium", "Large", "ExtraLarge"]), default: "Default" },
    style: { type: "string", enum: ciEnum(["Default", "Person", "RoundedCorners"]), default: "Default" },
    themedUrls: { type: "array", items: ref("ThemedUrl") },
    url: { type: "string", description: "The image URL." },
    fallback: {
      anyOf: [ref("ImplementationsOf.Element"), ref("FallbackOption")],
    },
    id: { type: "string" },
    isSortKey: { type: "boolean" },
    isVisible: { type: "boolean" },
    "isVisible.dynamic": { type: "string" },
    key: { type: "string" },
    lang: { type: "string" },
  },
  additionalProperties: false,
};

// ══════════════════════════════════════════════════════════════════════════
// UPDATES TO EXISTING DEFINITIONS
// ══════════════════════════════════════════════════════════════════════════

/**
 * Helper: safely add properties to an existing definition.
 * Works with definitions that have additionalProperties: false.
 */
function addProps(defName, props) {
  const def = schema.definitions[defName];
  if (!def) {
    console.warn(`  WARNING: definition "${defName}" not found, skipping.`);
    return;
  }
  if (!def.properties) def.properties = {};
  for (const [key, value] of Object.entries(props)) {
    if (!(key in def.properties)) {
      def.properties[key] = value;
    }
  }
}

// ── Update Container ───────────────────────────────────────────────────────
// Make items optional (containers can be used for background images only)
delete schema.definitions.Container.required;

addProps("Container", {
  showBorder: { type: "boolean", description: "If true, display a border.", default: false },
  roundedCorners: { type: "boolean", description: "If true, display with rounded corners.", default: false },
  layouts: { type: "array", items: ref("ImplementationsOf.Layout"), description: "The layouts to apply." },
  maxHeight: { type: "string", description: "The maximum height in pixels.", pattern: pxPattern },
  "grid.area": { type: "string", description: "The area of a Layout.AreaGrid." },
  isSortKey: { type: "boolean", description: "Controls whether the element should be used as a sort key.", default: false },
  "isVisible.dynamic": { type: "string", description: "Expression to dynamically control isVisible." },
  key: { type: "string", description: "Defines an optional key." },
  lang: { type: "string", description: "The locale associated with the element." },
  targetWidth: { ...TargetWidthEnum },
  horizontalAlignment: {
    anyOf: [ref("HorizontalAlignment"), { type: "null" }],
    description: "Controls how the element should be horizontally aligned.",
  },
});

// ── Update ColumnSet ───────────────────────────────────────────────────────
addProps("ColumnSet", {
  showBorder: { type: "boolean", description: "If true, display a border.", default: false },
  roundedCorners: { type: "boolean", description: "If true, display with rounded corners.", default: false },
  minWidth: { type: "string", description: "The minimum width of the ColumnSet." },
  "grid.area": { type: "string", description: "The area of a Layout.AreaGrid." },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update Column ──────────────────────────────────────────────────────────
addProps("Column", {
  showBorder: { type: "boolean", description: "If true, display a border.", default: false },
  roundedCorners: { type: "boolean", description: "If true, display with rounded corners.", default: false },
  layouts: { type: "array", items: ref("ImplementationsOf.Layout"), description: "The layouts to apply." },
  maxHeight: { type: "string", description: "The maximum height in pixels.", pattern: pxPattern },
  horizontalAlignment: { anyOf: [ref("HorizontalAlignment"), { type: "null" }], description: "Controls how the column content is horizontally aligned." },
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update Table ───────────────────────────────────────────────────────────
addProps("Table", {
  showBorder: { type: "boolean", default: false },
  roundedCorners: { type: "boolean", default: false },
  firstRowAsHeaders: { type: "boolean", description: "Alias for firstRowAsHeader.", default: true },
  style: ref("ContainerStyle"),
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update TableRow ────────────────────────────────────────────────────────
addProps("TableRow", {
  showBorder: { type: "boolean", default: false },
  roundedCorners: { type: "boolean", default: false },
  // style already exists on TableRow
});

// ── Update TableCell ───────────────────────────────────────────────────────
addProps("TableCell", {
  layouts: { type: "array", items: ref("ImplementationsOf.Layout"), description: "The layouts to apply." },
  maxHeight: { type: "string", description: "The maximum height in pixels.", pattern: pxPattern },
  showBorder: { type: "boolean", default: false },
  roundedCorners: { type: "boolean", default: false },
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update TextBlock ───────────────────────────────────────────────────────
// Note: TextBlock already has a "style" property referencing TextBlockStyle.
// We add our extra text-related props; the existing style stays.
addProps("TextBlock", {
  labelFor: { type: "string", description: "ID of the element this label is for." },
  "text.dynamic": { type: "string", description: "Expression for dynamic text." },
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});
// Update TextBlock style to also accept our extended values
schema.definitions["TextBlock"].properties.style = {
  anyOf: [
    ref("TextBlockStyle"),
    { type: "string", enum: ciEnum(["default", "columnHeader", "heading"]) },
    { type: "null" },
  ],
  description: "The style of this TextBlock.",
  default: "default",
};

// ── Update Image ───────────────────────────────────────────────────────────
addProps("Image", {
  allowExpand: { type: "boolean", description: "If true, allow the image to expand when tapped.", default: false },
  fitMode: { type: "string", enum: ciEnum(["Cover", "Contain", "Fill"]), default: "Fill" },
  themedUrls: { type: "array", items: ref("ThemedUrl") },
  horizontalContentAlignment: { type: "string", enum: ciEnum(["Left", "Center", "Right"]) },
  verticalContentAlignment: { type: "string", enum: ciEnum(["Top", "Center", "Bottom"]) },
  msteams: { type: "object", description: "MS Teams-specific properties (lowercase)." },
  msTeams: { type: "object", description: "MS Teams-specific properties (camelCase)." },
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});
// Image style is already updated via ImageStyle definition above

// ── Update ImageSet ────────────────────────────────────────────────────────
addProps("ImageSet", {
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update RichTextBlock ───────────────────────────────────────────────────
addProps("RichTextBlock", {
  labelFor: { type: "string", description: "ID of the element this label is for." },
  wrap: { type: "boolean", description: "If true, allow text to wrap.", default: true },
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update FactSet ─────────────────────────────────────────────────────────
addProps("FactSet", {
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update Media ───────────────────────────────────────────────────────────
addProps("Media", {
  "grid.area": { type: "string" },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update ActionSet ───────────────────────────────────────────────────────
addProps("ActionSet", {
  "grid.area": { type: "string" },
  horizontalAlignment: {
    anyOf: [ref("HorizontalAlignment"), { type: "null" }],
    description: "Controls how the element should be horizontally aligned.",
  },
  isSortKey: { type: "boolean", default: false },
  "isVisible.dynamic": { type: "string" },
  key: { type: "string" },
  lang: { type: "string" },
  targetWidth: { ...TargetWidthEnum },
});

// ── Update AdaptiveCard ────────────────────────────────────────────────────
// layouts was already added; update it to reference ImplementationsOf.Layout
schema.definitions["AdaptiveCard"].properties.layouts = {
  type: "array",
  items: ref("ImplementationsOf.Layout"),
  description: "The layouts to apply to the card body.",
};
addProps("AdaptiveCard", {
  msteams: { type: "object", description: "MS Teams-specific properties (lowercase)." },
  msTeams: { type: "object", description: "MS Teams-specific properties (camelCase)." },
  references: {
    type: "array",
    items: { anyOf: [ref("DocumentReference"), ref("AdaptiveCardReference")] },
    description: "References to external documents or cards.",
  },
  resources: { type: "object", description: "Card resources." },
  style: ref("ContainerStyle"),
  fallback: {
    anyOf: [ref("ImplementationsOf.Element"), ref("FallbackOption")],
  },
  "grid.area": { type: "string" },
  id: { type: "string" },
  isSortKey: { type: "boolean" },
  key: { type: "string" },
  requires: { type: "object", additionalProperties: { type: "string" } },
});

// ── Update BackgroundImage ─────────────────────────────────────────────────
addProps("BackgroundImage", {
  themedUrls: { type: "array", items: ref("ThemedUrl") },
  key: { type: "string" },
});

// ── Update Extendable.Action (base action properties) ──────────────────────
addProps("Extendable.Action", {
  "isEnabled.dynamic": { type: "string" },
  isVisible: { type: "boolean", description: "If false, this action will be removed from the visual tree.", default: true },
  "isVisible.dynamic": { type: "string" },
  themedIconUrls: { type: "array", items: ref("ThemedUrl") },
  "title.dynamic": { type: "string" },
  "tooltip.dynamic": { type: "string" },
  menuActions: { type: "array", items: ref("ImplementationsOf.Action") },
  key: { type: "string" },
});

// ── Shared new props for ALL existing action types ─────────────────────────
const existingActionNewProps = {
  "isEnabled.dynamic": { type: "string", description: "Expression to dynamically control isEnabled." },
  isVisible: { type: "boolean", description: "If false, this action will be removed from the visual tree.", default: true },
  "isVisible.dynamic": { type: "string", description: "Expression to dynamically control isVisible." },
  mode: { type: "string", enum: ciEnum(["primary", "secondary"]), default: "primary" },
  themedIconUrls: { type: "array", items: ref("ThemedUrl") },
  "title.dynamic": { type: "string" },
  "tooltip.dynamic": { type: "string" },
  menuActions: { type: "array", items: ref("ImplementationsOf.Action") },
  key: { type: "string" },
};

addProps("Action.Execute", existingActionNewProps);
addProps("Action.OpenUrl", existingActionNewProps);
addProps("Action.ShowCard", existingActionNewProps);
addProps("Action.Submit", existingActionNewProps);
addProps("Action.ToggleVisibility", existingActionNewProps);

// Additionally for Action.Execute
addProps("Action.Execute", {
  conditionallyEnabled: { type: "boolean", description: "Whether the action is conditionally enabled.", default: false },
});

// Additionally for Action.OpenUrl
addProps("Action.OpenUrl", {
  altText: { type: "string", description: "Alternative text for accessibility." },
});

// Additionally for Action.Submit
addProps("Action.Submit", {
  conditionallyEnabled: { type: "boolean", description: "Whether the action is conditionally enabled.", default: false },
  msteams: { type: "object", description: "MS Teams-specific properties (lowercase)." },
  msTeams: { type: "object", description: "MS Teams-specific properties (camelCase)." },
});

// ── Update Input.ChoiceSet ─────────────────────────────────────────────────
addProps("Input.ChoiceSet", {
  valueChangedAction: { ...ref("ImplementationsOf.Action"), description: "Action invoked when the selected value changes." },
});

// ── Update Data.Query ──────────────────────────────────────────────────────
addProps("Data.Query", {
  associatedInputs: { type: "string", enum: ciEnum(["auto", "none"]), description: "Controls which inputs are associated with the query." },
});

// ── Update TextRun (add wrap to the object variant) ────────────────────────
{
  const textRunAnyOf = schema.definitions.TextRun?.anyOf;
  if (textRunAnyOf) {
    const objVariant = textRunAnyOf.find(v => v.type === "object");
    if (objVariant && objVariant.properties) {
      objVariant.properties.wrap = { type: "boolean", description: "If true, allow text to wrap.", default: true };
    }
  }
}

// ── Update BackgroundImage (make url optional for partial definitions) ──────
if (schema.definitions.BackgroundImage?.required) {
  schema.definitions.BackgroundImage.required = schema.definitions.BackgroundImage.required.filter(r => r !== "url");
}

// ── Relax Extendable.Input (id not always required in practice) ────────────
if (schema.definitions["Extendable.Input"]?.required) {
  schema.definitions["Extendable.Input"].required = schema.definitions["Extendable.Input"].required.filter(r => r !== "id");
}

// ── Relax Input.Choice (value not always present in practice) ──────────────
if (schema.definitions["Input.Choice"]?.required) {
  schema.definitions["Input.Choice"].required = schema.definitions["Input.Choice"].required.filter(r => r !== "value");
}

// ── Relax TextBlock (text not always present, e.g. when dynamically populated) ─
if (schema.definitions.TextBlock?.required) {
  schema.definitions.TextBlock.required = schema.definitions.TextBlock.required.filter(r => r !== "text");
}

// ══════════════════════════════════════════════════════════════════════════
// UPDATE RichTextBlock INLINES to accept new inline types
// ══════════════════════════════════════════════════════════════════════════

schema.definitions["ImplementationsOf.Inline"].anyOf.push(
  implEntry("CitationRun"),
  implEntry("IconRun"),
  implEntry("ImageRun"),
);

// ══════════════════════════════════════════════════════════════════════════
// REGISTER IN ImplementationsOf.* UNIONS
// ══════════════════════════════════════════════════════════════════════════

// ── Chart types in Element + ToggleableItem ────────────────────────────────
const chartTypes = [
  "Chart.Donut", "Chart.Pie",
  "Chart.VerticalBar", "Chart.VerticalBar.Grouped",
  "Chart.HorizontalBar", "Chart.HorizontalBar.Stacked",
  "Chart.Line", "Chart.Gauge",
];

for (const t of chartTypes) {
  schema.definitions["ImplementationsOf.Element"].anyOf.push(implEntry(t));
  schema.definitions["ImplementationsOf.ToggleableItem"].anyOf.push(implEntry(t));
}

// ── New body element types ─────────────────────────────────────────────────
const newElementTypes = [
  "Icon", "Badge", "CodeBlock", "CompoundButton",
  "ProgressBar", "ProgressRing", "Rating", "Input.Rating",
  "Carousel", "Accordion", "TabSet", "LoopComponent",
];

for (const t of newElementTypes) {
  schema.definitions["ImplementationsOf.Element"].anyOf.push(implEntry(t));
  schema.definitions["ImplementationsOf.ToggleableItem"].anyOf.push(implEntry(t));
}

// ── New action types ───────────────────────────────────────────────────────
const newActionTypes = [
  "Action.Popover", "Action.ResetInputs", "Action.RunCommands",
  "Action.InsertImage", "Action.OpenUrlDialog",
];

for (const t of newActionTypes) {
  schema.definitions["ImplementationsOf.Action"].anyOf.push(implEntry(t));
  // Add to ISelectAction too (all new actions are valid select actions)
  schema.definitions["ImplementationsOf.ISelectAction"].anyOf.push(implEntry(t));
}

// ══════════════════════════════════════════════════════════════════════════
// WRITE OUTPUT
// ══════════════════════════════════════════════════════════════════════════

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(schema, null, 2) + "\n");

// ── Summary ────────────────────────────────────────────────────────────────

const allDefs = Object.keys(schema.definitions);
const chartDefs = allDefs.filter((k) => k.startsWith("Chart."));
const dataDefs = allDefs.filter((k) =>
  k.match(/ChartData|BarChart|LineChart|GaugeChart|DonutChart/)
);
const layoutDefs = allDefs.filter((k) => k.startsWith("Layout."));
const newElements = allDefs.filter((k) => newElementTypes.includes(k));
const newActions = allDefs.filter((k) => newActionTypes.includes(k));
const inlineTypes = ["CitationRun", "IconRun", "ImageRun"].filter((k) => allDefs.includes(k));
const helperTypes = ["ThemedUrl", "IconInfo", "GridArea", "DocumentReference", "AdaptiveCardReference"].filter((k) => allDefs.includes(k));

console.log(`Done. Written to ${OUTPUT_FILE}`);
console.log(`  Total definitions: ${allDefs.length}`);
console.log(`  Chart types: ${chartDefs.join(", ")}`);
console.log(`  Chart data objects: ${dataDefs.join(", ")}`);
console.log(`  Layout types: ${layoutDefs.join(", ")}`);
console.log(`  New body elements: ${newElements.join(", ")}`);
console.log(`  New action types: ${newActions.join(", ")}`);
console.log(`  New inline types: ${inlineTypes.join(", ")}`);
console.log(`  Helper types: ${helperTypes.join(", ")}`);
console.log(`  Updated existing: Container, ColumnSet, Column, Table, TableRow, TableCell, TextBlock, Image, ImageSet, RichTextBlock, FactSet, Media, ActionSet, AdaptiveCard, BackgroundImage, Action.Execute, Action.OpenUrl, Action.ShowCard, Action.Submit, Action.ToggleVisibility, Extendable.Action, Input.ChoiceSet, ContainerStyle, ImageStyle`);
