import 'vite/modulepreload-polyfill';



import React from 'react';
import ReactDOM from 'react-dom/client';

const COMPONENT_MAP = {
	DimensionMeasureMultiSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DimensionMeasureMultiSelectFieldPro')),
	MarkdownPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MarkdownPro')),
	DimensionSingleSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DimensionSingleSelectFieldPro')),
	MeasureMultiSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MeasureMultiSelectFieldPro')),
	MeasureSingleSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MeasureSingleSelectFieldPro')),
	ComparisonPeriodSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/ComparisonPeriodSelectFieldPro')),
	DateRangePickerCustomPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DateRangePickerCustomPro')),
	GranularitySelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/GranularitySelectFieldPro')),
	SingleSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/SingleSelectFieldPro')),
	MultiSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MultiSelectFieldPro')),
	TextFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/TextFieldPro')),
	HorizontalDividerPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/HorizontalDividerPro')),
	BarChartGroupedHorizontalPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartGroupedHorizontalPro')),
	BarChartDefaultPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartDefaultPro')),
	BarChartStackedHorizontalPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartStackedHorizontalPro')),
	KpiChartNumberComparisonPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/KpiChartNumberComparisonPro')),
	BarChartStackedPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartStackedPro')),
	BarChartDefaultHorizontalPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartDefaultHorizontalPro')),
	DateRangeSelectFieldPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DateRangeSelectFieldPro')),
	BarChartGroupedPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartGroupedPro')),
	HeatMapPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/HeatMapPro')),
	EmptyBlockPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/EmptyBlockPro')),
	LineChartComparisonDefaultPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/LineChartComparisonDefaultPro')),
	LineChartGroupedPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/LineChartGroupedPro')),
	TableScrollable: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/TableScrollable')),
	DonutLabelChartPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DonutLabelChartPro')),
	LineChartDefaultPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/LineChartDefaultPro')),
	TableChartPaginated: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/TableChartPaginated')),
	DonutChartPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DonutChartPro')),
	PieChartPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/PieChartPro')),
	KpiChartNumberPro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/KpiChartNumberPro')),
	PivotTablePro: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/PivotTablePro')),
	MarkdownEditor: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MarkdownEditor')),
	ColorEditor: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/ColorEditor')),
	DimensionMeasureMultiSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DimensionMeasureMultiSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	MarkdownPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MarkdownPro').then(module => ({
        default: module.preview
      }))),
	DimensionSingleSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DimensionSingleSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	MeasureMultiSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MeasureMultiSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	MeasureSingleSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MeasureSingleSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	ComparisonPeriodSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/ComparisonPeriodSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	DateRangePickerCustomPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DateRangePickerCustomPro').then(module => ({
        default: module.preview
      }))),
	GranularitySelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/GranularitySelectFieldPro').then(module => ({
        default: module.preview
      }))),
	SingleSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/SingleSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	MultiSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/MultiSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	TextFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/TextFieldPro').then(module => ({
        default: module.preview
      }))),
	HorizontalDividerPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/HorizontalDividerPro').then(module => ({
        default: module.preview
      }))),
	BarChartGroupedHorizontalPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartGroupedHorizontalPro').then(module => ({
        default: module.preview
      }))),
	BarChartDefaultPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartDefaultPro').then(module => ({
        default: module.preview
      }))),
	BarChartStackedHorizontalPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartStackedHorizontalPro').then(module => ({
        default: module.preview
      }))),
	KpiChartNumberComparisonPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/KpiChartNumberComparisonPro').then(module => ({
        default: module.preview
      }))),
	BarChartStackedPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartStackedPro').then(module => ({
        default: module.preview
      }))),
	BarChartDefaultHorizontalPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartDefaultHorizontalPro').then(module => ({
        default: module.preview
      }))),
	DateRangeSelectFieldPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DateRangeSelectFieldPro').then(module => ({
        default: module.preview
      }))),
	BarChartGroupedPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/BarChartGroupedPro').then(module => ({
        default: module.preview
      }))),
	HeatMapPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/HeatMapPro').then(module => ({
        default: module.preview
      }))),
	EmptyBlockPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/EmptyBlockPro').then(module => ({
        default: module.preview
      }))),
	LineChartComparisonDefaultPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/LineChartComparisonDefaultPro').then(module => ({
        default: module.preview
      }))),
	LineChartGroupedPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/LineChartGroupedPro').then(module => ({
        default: module.preview
      }))),
	TableScrollable_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/TableScrollable').then(module => ({
        default: module.preview
      }))),
	DonutLabelChartPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DonutLabelChartPro').then(module => ({
        default: module.preview
      }))),
	LineChartDefaultPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/LineChartDefaultPro').then(module => ({
        default: module.preview
      }))),
	TableChartPaginated_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/TableChartPaginated').then(module => ({
        default: module.preview
      }))),
	DonutChartPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/DonutChartPro').then(module => ({
        default: module.preview
      }))),
	PieChartPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/PieChartPro').then(module => ({
        default: module.preview
      }))),
	KpiChartNumberPro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/KpiChartNumberPro').then(module => ({
        default: module.preview
      }))),
	PivotTablePro_preview: React.lazy(() => import('@embeddable.com/remarkable-pro/dist/PivotTablePro').then(module => ({
        default: module.preview
      })))
};

function DefaultErrorFallbackComponent({ error }) {
    return <div>Error: {error?.message}</div>;
}

export default (rootEl, componentName, props, clientContext, theme, onComponentReady) => {
    const Component = COMPONENT_MAP[componentName];
    const root = ReactDOM.createRoot(rootEl);
    const unmountHandler = () => {
        root.unmount();
        rootEl.removeEventListener('EMBEDDABLE_COMPONENT:UNMOUNT', unmountHandler);
    };
    root.render(
    <ErrorBoundary fallback={null ?? DefaultErrorFallbackComponent} onComponentReady={onComponentReady}>
        <React.Suspense fallback={<div/>}>
            
                <Component {...props} propsUpdateListener={rootEl} clientContext={clientContext} embeddableTheme={theme} __embeddableOnComponentReady={onComponentReady} />
            
        </React.Suspense>
    </ErrorBoundary>
    );
    rootEl.addEventListener('EMBEDDABLE_COMPONENT:UNMOUNT', unmountHandler);
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onComponentReady?.();
  }

  render() {
    if (this.state.hasError && this.props.fallback) {
      const FallbackComponent = this.props.fallback;
      return <FallbackComponent error={this.state.error} />
    }

    return this.props.children;
  }
}