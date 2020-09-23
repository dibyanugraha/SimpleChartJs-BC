page 50100 "ad_ShowChartPart"
{
    PageType = CardPart;
    Caption = 'Chart';

    layout
    {
        area(Content)
        {
            usercontrol("Calendar"; ad_ChartJs)
            {
                ApplicationArea = All;
                trigger OnControlAddInReady()
                begin
                end;
            }
        }
    }
}