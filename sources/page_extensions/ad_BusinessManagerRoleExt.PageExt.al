pageextension 50000 "ad_BusinessManagerRoleExt" extends "Business Manager Role Center"
{
    layout
    {
        addafter(Control98)
        {
            part("Chart"; ad_ShowChartPart)
            {
                ApplicationArea = All;
            }
        }
    }
}