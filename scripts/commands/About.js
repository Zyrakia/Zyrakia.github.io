var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var AboutCommand = /** @class */ (function () {
    function AboutCommand() {
        this.identifier = 'about';
    }
    AboutCommand.prototype.invoke = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var reply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reply = "\n        START||About me:\n        RAW||\n        RAW||\n        INDENT-1||I like web development.\n        RAW||\n        RAW||\n        END||Who cares, try 'projects'.\n        ";
                        // RAW-1-${settings}||I am a Canadian high school student interested in programming.
                        // RAW-1-${settings}||Specifically web development... can you tell?
                        // RAW-1-${settings}||
                        // RAW-1-${settings}||I am always looking forward to learning and working on projects.
                        // RAW-1-${settings}||My dream goal is to work at Tesla or Twitch.
                        // RAW-1-${settings}||But that's a stretch.
                        // RAW-1-${settings}||
                        // RAW-1-${settings}||My favorite language is the almighty Typescript.
                        // RAW-1-${settings}||Mainly because I started programming in Java.
                        // END||But who cares, try 'projects'.
                        // `;
                        return [4 /*yield*/, ctx.getTerminal().sayString(reply)];
                    case 1:
                        // RAW-1-${settings}||I am a Canadian high school student interested in programming.
                        // RAW-1-${settings}||Specifically web development... can you tell?
                        // RAW-1-${settings}||
                        // RAW-1-${settings}||I am always looking forward to learning and working on projects.
                        // RAW-1-${settings}||My dream goal is to work at Tesla or Twitch.
                        // RAW-1-${settings}||But that's a stretch.
                        // RAW-1-${settings}||
                        // RAW-1-${settings}||My favorite language is the almighty Typescript.
                        // RAW-1-${settings}||Mainly because I started programming in Java.
                        // END||But who cares, try 'projects'.
                        // `;
                        _a.sent();
                        ctx.getTerminal().openInput();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AboutCommand;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ1UsZUFBVSxHQUFHLE9BQU8sQ0FBQztJQTZCL0IsQ0FBQztJQTNCTSw2QkFBTSxHQUFaLFVBQWEsR0FBMkI7Ozs7Ozt3QkFDakMsS0FBSyxHQUFHLHNMQVFQLENBQUM7d0JBQ1Isb0ZBQW9GO3dCQUNwRixtRUFBbUU7d0JBQ25FLHNCQUFzQjt3QkFDdEIsc0ZBQXNGO3dCQUN0RixrRUFBa0U7d0JBQ2xFLDJDQUEyQzt3QkFDM0Msc0JBQXNCO3dCQUN0QixzRUFBc0U7d0JBQ3RFLG1FQUFtRTt3QkFFbkUsc0NBQXNDO3dCQUN0QyxLQUFLO3dCQUVMLHFCQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQWJ4QyxvRkFBb0Y7d0JBQ3BGLG1FQUFtRTt3QkFDbkUsc0JBQXNCO3dCQUN0QixzRkFBc0Y7d0JBQ3RGLGtFQUFrRTt3QkFDbEUsMkNBQTJDO3dCQUMzQyxzQkFBc0I7d0JBQ3RCLHNFQUFzRTt3QkFDdEUsbUVBQW1FO3dCQUVuRSxzQ0FBc0M7d0JBQ3RDLEtBQUs7d0JBRUwsU0FBd0MsQ0FBQzt3QkFFekMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7OztLQUM5QjtJQUNGLG1CQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQyJ9