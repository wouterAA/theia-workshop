import { WidgetOpenHandler } from "@theia/core/lib/browser";
import { JsonschemaFormWidget } from "./jsonschema-form-widget";
import URI from "@theia/core/lib/common/uri";
import { injectable, inject } from "inversify";
import { EditorManager } from "@theia/editor/lib/browser";
import { MenuModelRegistry, MenuPath, Disposable } from "@theia/core";

@injectable()
export class TestMenuMenuModelRegistry extends MenuModelRegistry {
    registerSubmenu(menuPath: MenuPath, label: string) : Disposable {
        console.log("HELLO");
        return super.registerSubmenu(menuPath, label);
    }
}

@injectable()
export class JsonschemaFormOpenHandler extends WidgetOpenHandler<JsonschemaFormWidget> {

    readonly id = JsonschemaFormWidget.id;
    // readonly label = "Form";

    @inject(EditorManager)
    protected readonly editorManager: EditorManager;

    /**
     * Test whether this handler can open the given URI for given options.
     * Return a positive number if this handler can open; otherwise it cannot.
     *
     * A returned value indicating a priority of this handler.
     */
    canHandle(uri: URI): number {
        if(uri.path.ext !== ".json") {
            return -1;
        }

        if(uri.displayName.endsWith("-data.json")) {
            return 9000000;
        }
        return 1;
    }

}