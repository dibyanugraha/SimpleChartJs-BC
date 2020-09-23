controladdin "ad_ChartJs"
{
    Scripts =
        'sources/scripts/Chart.bundle.min.js';
    StyleSheets =
        'sources/stylesheets/Chart.min.css';

    StartupScript = 'sources/scripts/start.js';

    RequestedHeight = 320;
    RequestedWidth = 300;
    MinimumHeight = 180;
    MinimumWidth = 200;
    VerticalShrink = true;
    HorizontalShrink = true;
    VerticalStretch = true;
    HorizontalStretch = true;

    event OnControlAddInReady();
}
