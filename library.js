var embedURL = '<iframe src="https://docs.google.com/forms/d/$1/viewform?$2"'
    + 'width="100%" height="450px" style="max-width: 100%" frameborder="0"'
    + 'marginheight="0" marginwidth="0">Google Form...</iframe>';
var urlRegexp = /<a href="(?:https?:\/\/)?(?:docs\.google\.com)\/forms\/d\/(.+)\/viewform\?*(.*)>.+<\/a>/g;

var GFormsPlugin = {
    parse: function (data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(urlRegexp)) {
            data.postData.content = data.postData.content.replace(urlRegexp, embedURL);
        }
        callback(null, data);
    }
}

module.exports = GFormsPlugin;
