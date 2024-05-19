import tinymce from 'tinymce';
import * as commands from './api/commands';
import * as buttons from './ui/buttons';

export default (defaultOptions): void => {
  tinymce.PluginManager.add(defaultOptions.id, function (editor) {
    commands.register(editor, defaultOptions);
    buttons.register(editor, defaultOptions);
    return {};
  });
};
