import { CodeblockSelect } from "./CodeblockSelect";
import { CHAIN_OPTIONS, CODE_SAMPLES, type Chain } from "./codeData";
import useTheme from "./useTheme";

// Get method options for a chain by reading from CODE_SAMPLES
const getMethodOptionsForChain = (chain: Chain) => {
  return Object.keys(CODE_SAMPLES[chain] || {}).map((method) => ({
    value: method,
    label: method,
  }));
};

// Get default method for a chain (first method alphabetically)
const getDefaultMethodForChain = (chain: Chain): string => {
  const methods = Object.keys(CODE_SAMPLES[chain] || {});
  return methods[0] || "";
};

const CodeConsole = () => {
  const { isDark } = useTheme();

  const [chain, setChain] = React.useState<Chain>("ethereum");
  const [method, setMethod] = React.useState<string>("eth_getBlockByNumber");
  const [showResponse, setShowResponse] = React.useState(false);

  const chainSamples = CODE_SAMPLES[chain] as Record<
    string,
    { request: string; response: string }
  >;
  const codeSample = chainSamples?.[method];

  let currentCode: string;
  if (!codeSample) {
    currentCode = "Code sample not available for this combination";
  } else if (showResponse) {
    currentCode = codeSample.response;
  } else {
    currentCode = codeSample.request;
  }

  const handleRun = () => {
    setShowResponse(true);
  };

  const handleChainChange = (value: string) => {
    const newChain = value as Chain;
    setChain(newChain);
    setShowResponse(false); // Reset to request view

    // Reset method to default for new chain
    const defaultMethod = getDefaultMethodForChain(newChain);
    setMethod(defaultMethod);
  };

  const handleMethodChange = (value: string) => {
    setMethod(value);
    setShowResponse(false); // Reset to request view
  };

  // Get filtered method options for current chain
  const availableMethodOptions = getMethodOptionsForChain(chain);

  return (
    <div id="CodeConsole">
      <h3 className="mb-6">Query the blockchain instantly</h3>
      <div className="CodeBlockContainer">
        <div className="CodeBlockInner">
          <div className="TopBar">
            <div className="SelectGroup">
              <span className="RequestLabel">
                {showResponse ? "Response" : "Request"}
              </span>

              {/* Chain Selector */}
              <CodeblockSelect
                isDark={isDark}
                options={CHAIN_OPTIONS}
                selectedOption={chain}
                onChange={handleChainChange}
              />

              {/* Method Selector */}
              <CodeblockSelect
                isDark={isDark}
                options={availableMethodOptions}
                selectedOption={method}
                onChange={handleMethodChange}
              />
            </div>
            <button
              className="RunButton"
              onClick={handleRun}
              disabled={showResponse}
            >
              RUN{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.07199 5.43326C9.77475 5.83939 9.77732 6.35029 9.07199 6.80944L3.62211 10.6211C2.93734 11.0001 2.47226 10.7763 2.42344 9.95629L2.40032 1.97858C2.3849 1.22324 2.98487 1.00982 3.55659 1.37198L9.07199 5.43326Z"
                  stroke="#EDEDED"
                />
              </svg>
            </button>
          </div>
          <div className="ShikiCodeBlock">
            <pre>
              <code style={{ whiteSpace: "pre-wrap" }}>{currentCode}</code>
            </pre>
          </div>
        </div>
        <div className="QuickstartContainer">
          <div>
            <p className="QuickstartTitle">Quickstart</p>
            <span className="QuickstartSubtitle">
              Guides for 500+ endpoints on 80+ networks
            </span>
          </div>
          <div className="QuickstartLinkContainer">
            <a
              href="https://www.alchemy.com/docs/alchemy-quickstart-guide"
              className="QuickstartLink"
            >
              Get started&nbsp;
              <svg
                style={{
                  marginLeft: "4px",
                }}
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.63872 1.22041L7.32005 1.22033M7.32005 1.22033L7.32005 6.82086M7.32005 1.22033L0.720385 7.81999"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeConsole;
