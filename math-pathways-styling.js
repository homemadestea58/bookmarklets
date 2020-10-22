javascript:(function () {
let s = atob("I2R5bmFtaWMtbmF2YmFyLCNkeW5hbWljLW5hdmJhciAqLCAubWF0LWRpYWxvZy1jb250YWluZXIsLm1hdC1kaWFsb2ctY29udGFpbmVyICosLm1vZHVsZS1oZWFkZXIsLm1vZHVsZS1oZWFkZXIgKiwubmF2aWdhdGlvbi1jb21wb25lbnQsLm5hdmlnYXRpb24tY29tcG9uZW50ICosLnBhbmVsLC5wcm9ncmVzcy1iYXItY29udGFpbmVyLC5wcm9ncmVzcy1iYXItY29udGFpbmVyICosLnRpcC1wYW5lbCxidXR0b24tY29tcG9uZW50LGJ1dHRvbi1jb21wb25lbnQgKixjYWxsLXRvLWFjdGlvbi1jb21wb25lbnQsY2FsbC10by1hY3Rpb24tY29tcG9uZW50ICosc2VjdGlvbntib3JkZXI6bm9uZSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH0ucHJvZ3Jlc3MtYmFyLWl0ZW06bnRoLWNoaWxkKG9kZCk6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfXByb2dyZXNzLWJhci1jb21wb25lbnR7Y291bnRlci1yZXNldDp0b3RhbCAwfS5wcm9ncmVzcy1iYXItaXRlbXtjb3VudGVyLWluY3JlbWVudDp0b3RhbH0ucHJvZ3Jlc3MtYmFyLWl0ZW06OmJlZm9yZXtjb250ZW50OmNvdW50ZXIodG90YWwpO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MTAwO2NvbG9yOnJnYmEoMCwwLDAsLjcpO2ZvbnQtc2l6ZToxMnB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJX0uZm9yZWdyb3VuZC1iYXJ7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudH0gLnBiLWJsdWUtYmcrLnByb2dyZXNzLWJhci1pdGVtOm5vdCgucGItYmx1ZS1iZyk6OmJlZm9yZSwgcHJvZ3Jlc3MtYmFyLWNvbXBvbmVudCA6Zmlyc3QtY2hpbGQ6bm90KC5wYi1ibHVlLWJnKTo6YmVmb3JlIHtiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3d9");
    if ("\v" == "v") {
        document
            .createStyleSheet()
            .cssText = s
    } else {
        var tag = document
            .createElement(
                "style")
        tag.type = "text/css";
        document
            .getElementsByTagName(
                "head")[0]
            .appendChild(tag);
        tag[(typeof document
                    .body.style
                    .WebkitAppearance ==
                    "string") ?
                "innerText" :
                "innerHTML"] =
            s
    }
})();
