var styles = 'width: 100%; height: 450px; border: none;';
var embedURL = 'https://docs.google.com/forms/d/$1/viewform?$2';
var embedContent = '<iframe src="' + embedURL + '" style="' + styles + '">Google Form...</iframe>';
var urlRegexp = /<a href="(?:https?:\/\/)?(?:docs\.google\.com)\/forms\/d\/(.+)\/viewform\?*(.*)>.+<\/a>/g;

var GFormsPlugin = {
    parse: function (data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(urlRegexp)) {
            data.postData.content = data.postData.content.replace(urlRegexp, embedContent);
        }
        callback(null, data);
    }
}

module.exports = GFormsPlugin;
