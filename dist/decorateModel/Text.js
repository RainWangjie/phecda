import * as tslib_1 from "tslib";
import { Value } from './Value';
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text(value, presentationField) {
        var _this = _super.call(this, value, presentationField) || this;
        _this.clone = function (value) {
            return new Text(value || _this.value, {
                displayName: _this.field.displayName,
                valueMapper: _this.valueMapper,
            });
        };
        _this.valueMapper = presentationField.valueMapper;
        return _this;
    }
    Object.defineProperty(Text.prototype, "presentation", {
        get: function () {
            return this.valueDisplayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "kind", {
        get: function () {
            return Text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "valueDisplayName", {
        get: function () {
            if (this.valueMapper !== undefined) {
                return this.valueMapper[this.value];
            }
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    return Text;
}(Value));
export { Text };
