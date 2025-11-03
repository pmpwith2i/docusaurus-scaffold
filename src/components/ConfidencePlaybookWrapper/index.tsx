import { ConfidencePlaybook } from "@confidencesystemsinc/sdk";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const ConfidencePlaybookWrapper = () => (
    <BrowserOnly>
        {() => <ConfidencePlaybook.AutoInstantiated email='iphatak4ss@yahoo.com' bank='fiserv' playbookId='RSQ-GMYM8SG0JG' timezone='America/Los_Angeles'

            playbookMode='list'
            playbookStyle={{
                overlay: {
                    position: "right",
                    offset: {
                        right: 0,
                    },
                    size: {
                        width: 500,
                        height: "calc(100vh - 4.75rem)",
                    },
                },
            }}
        />}
    </BrowserOnly>
);
