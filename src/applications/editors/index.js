import { CurrenciesEditor, SecondaryCurrenciesEditor } from "./currencies-editor/currencies-editor.js";
import ItemFiltersEditor from "./item-filters-editor/item-filters-editor.js";
import StringListEditor from "./string-list-editor/string-list-editor.js";
import PriceModifiersEditor from "./price-modifiers-editor/price-modifiers-editor.js";
import PricePresetEditor from "./price-preset-editor/price-preset-editor.js";
import UnstackableItemTypesEditor from "./unstackable-item-types-editor/unstackable-item-types-editor.js";
import VaultStylesEditor from "./vault-styles-editor/vault-styles-editor.js";
import StylesEditor from "./styles-editor/styles-editor.js";

export default {
  "currencies": CurrenciesEditor,
  "secondary-currencies": SecondaryCurrenciesEditor,
  "item-filters": ItemFiltersEditor,
  "item-similarities": StringListEditor,
  "item-categories": StringListEditor,
  "styles": StylesEditor,
  "vault-styles": VaultStylesEditor,
  "price-modifiers": PriceModifiersEditor,
  "unstackable-item-types": UnstackableItemTypesEditor,
  "price-presets": PricePresetEditor
}
