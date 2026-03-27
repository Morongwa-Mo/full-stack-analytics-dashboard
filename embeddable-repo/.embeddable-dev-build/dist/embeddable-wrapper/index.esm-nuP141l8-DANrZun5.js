import { j, r as reactExports } from './embeddable-component-O_vB8keJ.js';

const DEFAULT_LOCALE = "en-US";
const createBuiltInType = (name, typeConfig = {}) => ({
  __embeddableType: "built-in",
  toString: () => name,
  typeConfig: {
    label: name,
    optionLabel: () => name,
    ...typeConfig
  }
});
const isLoadDataParams = (ldp) => typeof ldp === "object" && ldp && "requestParams" in ldp && "dataLoader" in ldp;
const UPDATE_VALUE_EVENT = "embeddable:value:changed";
const setValue = (triggerElement, value, componentId, eventName) => {
  const event = new CustomEvent(UPDATE_VALUE_EVENT, {
    bubbles: true,
    composed: true,
    detail: {
      componentId,
      value,
      eventName
    }
  });
  triggerElement.dispatchEvent(event);
};
const StringType = createBuiltInType("string", {
  transform: (value) => value,
  optionLabel: (value) => Array.isArray(value) ? `[${value.map((v) => `"${v}"`).join(",")}]` : `"${value}"`
});
const NumberType = createBuiltInType("number", {
  transform: (value) => Array.isArray(value) ? value : value ? Number(value) : value,
  optionLabel: (value) => Array.isArray(value) ? `[${value.join(",")}]` : (value == null ? void 0 : value.toLocaleString(DEFAULT_LOCALE)) ?? ""
});
const BooleanType = createBuiltInType("boolean", {
  transform: (value) => value === "true" || value === true,
  optionLabel: (value) => value ? "true" : "false"
});
const TimeType = createBuiltInType("time", {
  transform: (value) => {
    const date = (value == null ? void 0 : value.date) ? new Date(value.date) : void 0;
    const isValid = date && date.toString() !== "Invalid Date";
    return {
      date: isValid ? date : void 0,
      relativeTimeString: value == null ? void 0 : value.relativeTimeString
    };
  },
  optionLabel: (value) => {
    var _a;
    if (!value)
      return "";
    if (value == null ? void 0 : value.date) {
      return ((_a = value.date) == null ? void 0 : _a.toLocaleDateString(DEFAULT_LOCALE)) ?? value.date.toLocaleString();
    }
    return value.relativeTimeString;
  }
});
const TimeRangeType = createBuiltInType("timeRange", {
  transform: (value) => {
    if (!value)
      return void 0;
    const [from, to] = [value == null ? void 0 : value.from, value == null ? void 0 : value.to];
    const fromDate = new Date(from);
    const toDate = new Date(to);
    return {
      from: fromDate.toString() !== "Invalid Date" ? fromDate : void 0,
      to: toDate.toString() !== "Invalid Date" ? toDate : void 0,
      relativeTimeString: value == null ? void 0 : value.relativeTimeString
    };
  },
  optionLabel: (value) => {
    var _a, _b, _c, _d;
    if (!value)
      return "";
    if ((value == null ? void 0 : value.from) && (value == null ? void 0 : value.to)) {
      return `${((_a = value.from) == null ? void 0 : _a.toLocaleDateString(DEFAULT_LOCALE)) ?? ((_b = value.from) == null ? void 0 : _b.toLocaleString())},${((_c = value.to) == null ? void 0 : _c.toLocaleDateString(DEFAULT_LOCALE)) ?? ((_d = value.to) == null ? void 0 : _d.toLocaleString())}`;
    }
    return value == null ? void 0 : value.relativeTimeString;
  }
});
const GranularityType = createBuiltInType("granularity", {
  transform: (value) => value,
  optionLabel: (value) => value
});
const DatasetType = createBuiltInType("dataset");
const MeasureType = createBuiltInType("measure");
const DimensionType = createBuiltInType("dimension");
const DimensionOrMeasureType = createBuiltInType("dimensionOrMeasure");
var nativeTypes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BooleanType,
  DatasetType,
  DimensionOrMeasureType,
  DimensionType,
  GranularityType,
  MeasureType,
  NumberType,
  StringType,
  TimeRangeType,
  TimeType
});
const EmbeddableStateContext = j.createContext({});
const EmbeddableThemeContext = j.createContext({});
const useTheme = () => {
  return j.useContext(EmbeddableThemeContext);
};
function cleanInputsWithGranularity(obj) {
  if (!obj || !("inputs" in obj))
    return obj;
  const { inputs, ...rest } = obj;
  if (typeof inputs === "object" && "granularity" in inputs) {
    return { ...rest, inputs: { granularity: inputs.granularity } };
  }
  return rest;
}
const cleanupRequestParams = (requestParams) => {
  return {
    ...requestParams,
    dimensions: Array.isArray(requestParams.dimensions) ? requestParams.dimensions.map(cleanInputsWithGranularity) : requestParams.dimensions,
    measures: Array.isArray(requestParams.measures) ? requestParams.measures.map(cleanInputsWithGranularity) : requestParams.measures,
    select: Array.isArray(requestParams.select) ? requestParams.select.map((item) => Array.isArray(item) ? item.map(cleanInputsWithGranularity) : cleanInputsWithGranularity(item)) : requestParams.select,
    orderBy: Array.isArray(requestParams.orderBy) ? requestParams.orderBy.map((item) => ({
      ...item,
      property: cleanInputsWithGranularity(item.property)
    })) : requestParams.orderBy,
    filters: Array.isArray(requestParams.filters) ? requestParams.filters.map((filter) => ({
      ...filter,
      property: cleanInputsWithGranularity(filter.property)
    })) : requestParams.filters
  };
};
const UPDATE_CLIENT_CONTEXT_EVENT_NAME = "embeddable-event:update-client-context";
const UPDATE_PROPS_EVENT_NAME = "embeddable-event:update-props";
const RELOAD_DATASET_EVENT_NAME = "embeddable-event:reload-dataset";
const LOAD_DATA_RESULT_EVENT_NAME = "embeddable-event:load-data-result";
const UPDATE_THEME_EVENT_NAME = "embeddable-event:update-theme";
const ReducerActionTypes = {
  loading: "loading",
  error: "error",
  data: "data"
};
const reducer = (state, action) => {
  var _a;
  switch (action.type) {
    case ReducerActionTypes.loading: {
      return {
        ...state,
        [action.inputName]: {
          data: (_a = state[action.inputName]) == null ? void 0 : _a.data,
          isLoading: true
        }
      };
    }
    case ReducerActionTypes.data: {
      return {
        ...state,
        [action.inputName]: {
          isLoading: false,
          data: action.payload.data,
          total: action.payload.total
        }
      };
    }
    case ReducerActionTypes.error: {
      return {
        ...state,
        [action.inputName]: {
          isLoading: false,
          error: action.payload.message || action.payload
        }
      };
    }
  }
  return state;
};
const createInitialLoadersState = (dataLoaders) => Object.keys(dataLoaders).reduce((loaderState, loaderKey) => ({
  ...loaderState,
  [loaderKey]: { isLoading: true }
}), {});
const deserializeProps = (props, meta) => Object.fromEntries(Object.entries(props).map(([propName, propValue]) => {
  var _a, _b, _c, _d, _e;
  const inputPropConfig = (_a = meta.inputs) == null ? void 0 : _a.find((config) => config.name === propName);
  const deserialize = typeof (inputPropConfig == null ? void 0 : inputPropConfig.type) === "string" ? (_c = (_b = Object.values(nativeTypes).find((type) => type.toString() === (inputPropConfig == null ? void 0 : inputPropConfig.type))) == null ? void 0 : _b.typeConfig) == null ? void 0 : _c.transform : (_e = (_d = inputPropConfig == null ? void 0 : inputPropConfig.type) == null ? void 0 : _d.typeConfig) == null ? void 0 : _e.transform;
  return [propName, (deserialize == null ? void 0 : deserialize(propValue)) ?? propValue];
}));
const getInputValuesFromMeta = (meta) => {
  let inputValues = {};
  (meta.inputs || []).forEach((input) => {
    inputValues = {
      ...inputValues,
      [input.name]: input.defaultValue ?? null
    };
  });
  return inputValues;
};
function defineComponent(InnerComponent, meta, config = {}) {
  function EmbeddableWrapper({ propsUpdateListener, clientContext, embeddableTheme, __embeddableOnComponentReady, ...props }) {
    const [propsProxy, setPropsProxy] = reactExports.useState(props);
    const [clientContextProxy, setClientContextProxy] = reactExports.useState(clientContext);
    const embeddableState = reactExports.useState();
    const [calculatedOverridableProps, setCalculatedOverridableProps] = reactExports.useState(embeddableTheme ?? {});
    const { componentId } = props;
    const loadDataResultEventName = `${LOAD_DATA_RESULT_EVENT_NAME}:${componentId}`;
    const propsUpdateEventHandler = ({ detail }) => setPropsProxy(detail);
    const clientContextUpdateEventHandler = ({ detail }) => setClientContextProxy(detail);
    const themeUpdateEventHandler = ({ detail }) => setCalculatedOverridableProps(detail);
    reactExports.useEffect(() => {
      const notifyDevtoolListener = ({ detail }) => {
        var _a;
        (_a = window.__EMBEDDABLE_DEVTOOLS__) == null ? void 0 : _a.notifyPropsUpdated(componentId, meta, propsProxy, detail);
      };
      propsUpdateListener.addEventListener(UPDATE_PROPS_EVENT_NAME, notifyDevtoolListener);
      return () => propsUpdateListener.removeEventListener(UPDATE_PROPS_EVENT_NAME, notifyDevtoolListener);
    }, [propsProxy]);
    reactExports.useEffect(() => {
      propsUpdateListener.addEventListener(UPDATE_CLIENT_CONTEXT_EVENT_NAME, clientContextUpdateEventHandler);
      propsUpdateListener.addEventListener(UPDATE_PROPS_EVENT_NAME, propsUpdateEventHandler);
      propsUpdateListener.addEventListener(UPDATE_THEME_EVENT_NAME, themeUpdateEventHandler);
      const updatePropsEvent = new CustomEvent("embeddable-event:update-props-listen", {
        detail: { componentId }
      });
      window.dispatchEvent(updatePropsEvent);
      const updateClientContextEvent = new CustomEvent("embeddable-event:update-client-context-listen", {
        detail: { componentId }
      });
      window.dispatchEvent(updateClientContextEvent);
      __embeddableOnComponentReady == null ? void 0 : __embeddableOnComponentReady();
      return () => {
        propsUpdateListener.removeEventListener(UPDATE_CLIENT_CONTEXT_EVENT_NAME, clientContextUpdateEventHandler);
        propsUpdateListener.removeEventListener(UPDATE_PROPS_EVENT_NAME, propsUpdateEventHandler);
      };
    }, []);
    const { extendedProps, dataLoaders } = reactExports.useMemo(() => {
      var _a;
      return Object.entries({
        ...getInputValuesFromMeta(meta),
        ...(_a = config == null ? void 0 : config.props) == null ? void 0 : _a.call(config, deserializeProps(propsProxy, meta), embeddableState, clientContextProxy)
      }).reduce((acc, [key, value]) => {
        if (isLoadDataParams(value)) {
          acc.dataLoaders[key] = value;
        } else {
          acc.extendedProps[key] = value;
        }
        return acc;
      }, { extendedProps: {}, dataLoaders: {} });
    }, [propsProxy, config == null ? void 0 : config.props, embeddableState[0], clientContextProxy]);
    const [loadersState, dispatch] = reactExports.useReducer(reducer, dataLoaders, createInitialLoadersState);
    const handleDataLoaded = (inputName, data, total) => dispatch({
      type: ReducerActionTypes.data,
      inputName,
      payload: { data, total }
    });
    const handleError = (inputName, error) => dispatch({ type: ReducerActionTypes.error, inputName, payload: error });
    const reloadDataset = (inputName, params) => {
      dispatch({ type: ReducerActionTypes.loading, inputName });
      const error = params.dataLoader(propsUpdateListener, params.requestParams, componentId, inputName);
      if (error)
        handleError(inputName, error);
    };
    const handleLoadDataResult = (ev) => {
      var _a;
      (_a = window.__EMBEDDABLE_DEVTOOLS__) == null ? void 0 : _a.notifyDataLoaded(componentId, meta, ev.detail);
      if (ev.detail.isSuccess) {
        handleDataLoaded(ev.detail.propertyName, ev.detail.data, ev.detail.total);
      } else {
        handleError(ev.detail.propertyName, ev.detail.error);
      }
    };
    const variableChangedEventHandler = ({ detail }) => {
      var _a;
      const dataLoadersEntries = Object.entries(dataLoaders).filter(([_, params]) => params.requestParams.from.datasetId === detail.datasetId);
      (_a = window.__EMBEDDABLE_DEVTOOLS__) == null ? void 0 : _a.notifyVariableUpdated(componentId, meta, detail, Object.fromEntries(dataLoadersEntries));
      dataLoadersEntries.forEach(([inputName, params]) => reloadDataset(inputName, params));
    };
    reactExports.useEffect(() => {
      Object.entries(dataLoaders).forEach(([inputName, params]) => reloadDataset(inputName, params));
      window.addEventListener(RELOAD_DATASET_EVENT_NAME, variableChangedEventHandler);
      propsUpdateListener.addEventListener(loadDataResultEventName, handleLoadDataResult);
      return () => {
        window.removeEventListener(RELOAD_DATASET_EVENT_NAME, variableChangedEventHandler);
        propsUpdateListener.removeEventListener(loadDataResultEventName, handleLoadDataResult);
      };
    }, [
      JSON.stringify(Object.values(dataLoaders).map((loader) => cleanupRequestParams(loader.requestParams)))
    ]);
    const createEvent = (value, eventName) => setValue(propsUpdateListener, value, componentId, eventName);
    const events = config == null ? void 0 : config.events;
    const eventProps = {};
    if (events) {
      for (const event in events) {
        if (events.hasOwnProperty(event)) {
          let eventFunction = events[event];
          eventProps[event] = (value) => createEvent(eventFunction(value), event);
        }
      }
    }
    return reactExports.createElement(
      EmbeddableStateContext.Provider,
      { value: embeddableState },
      reactExports.createElement(
        EmbeddableThemeContext.Provider,
        { value: calculatedOverridableProps },
        reactExports.createElement(InnerComponent, { ...extendedProps, ...eventProps, ...loadersState })
      )
    );
  }
  EmbeddableWrapper.displayName = `embedded(${InnerComponent.displayName ?? meta.name})`;
  return EmbeddableWrapper;
}
const isOperation = (value) => (value == null ? void 0 : value.operation) && (value == null ? void 0 : value.__embeddableVariableMeta);
function defineEditor(InnerComponent, meta, config) {
  function EmbeddableWrapper(props) {
    var _a;
    const { componentId, initialValue, propsUpdateListener } = props;
    const { type: { typeConfig: { transform } } } = meta;
    const [componentState, setComponentState] = reactExports.useState(initialValue);
    const setter = (value) => {
      setComponentState(isOperation(value) ? value.value : value);
      setValue(propsUpdateListener, value, componentId);
    };
    return reactExports.createElement(InnerComponent, { ...config.inputs((transform == null ? void 0 : transform(componentState)) || componentState, setter, meta.config), ...((_a = config.mapProps) == null ? void 0 : _a.call(config, props)) ?? {} });
  }
  EmbeddableWrapper.displayName = `embedded(${InnerComponent.displayName ?? meta.name})`;
  return EmbeddableWrapper;
}
function definePreview(InnerComponent, config) {
  function EmbeddablePreviewWrapper({ embeddableTheme, __embeddableOnComponentReady }) {
    const embeddableState = j.useState();
    j.useEffect(() => {
      __embeddableOnComponentReady == null ? void 0 : __embeddableOnComponentReady();
    }, []);
    return j.createElement(
      EmbeddableStateContext.Provider,
      { value: embeddableState },
      j.createElement(
        EmbeddableThemeContext.Provider,
        { value: embeddableTheme },
        j.createElement(InnerComponent, { ...config })
      )
    );
  }
  EmbeddablePreviewWrapper.displayName = `embedded_preview(${InnerComponent.displayName})`;
  return EmbeddablePreviewWrapper;
}

export { definePreview as a, defineEditor as b, defineComponent as d, useTheme as u };
//# sourceMappingURL=index.esm-nuP141l8-DANrZun5.js.map

//# sourceMappingURL=index.esm-nuP141l8-DANrZun5.js.map