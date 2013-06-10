
var mondo = mondo || {};

mondo.math = {
  clamp: function(bottom, top, val) {
    return Math.min(top, Math.max(val, bottom));
  },
  clamp01: function(val) {
    return mondo.math.clamp(0, 1, val);
  },
  lerp: function(start, stop, amt) {
    amt = mondo.math.clamp01(amt);
    return start + (stop - start) * amt;
  },
  convertRange: function(input, input_start, input_end, output_start, output_end) {
    return ((input-input_start)/(input_end-input_start)) * (output_end-output_start) + output_start;
  },
  approximately: function(left, right, tolerance) {
    return Math.abs(left - right) < tolerance;
  }
};


