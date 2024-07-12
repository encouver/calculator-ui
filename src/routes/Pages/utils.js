function getPageHeight(theme) {
    const topSpacing = Number(theme.mixins.toolbar.minHeight) + parseInt(theme.spacing(1));
    return `calc(100vh - ${topSpacing}px)`;
}
export { getPageHeight };
