const Friend = require("./friendModel");
const AppError = require("./appError");
const catchAsync = require("./catchAsync");

exports.getAll = catchAsync(async (req, res, next) => {
  const friends = await Friend.find();

  res.status(200).json({
    status: "success",
    length: friends.length,
    data: {
      friends,
    },
  });
});

exports.getOne = catchAsync(async (req, res, next) => {
  const friend = await Friend.findById(req.params.id);

  if (!friend) {
    return next(new AppError("No document found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      friend,
    },
  });
});

exports.createOne = catchAsync(async (req, res, next) => {
  const friend = await Friend.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      friend,
    },
  });
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const friend = await Friend.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!friend) {
    return next(new AppError("No document found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      friend,
    },
  });
});

exports.deleteOne = catchAsync(async (req, res, next) => {
  const friend = await Friend.findByIdAndDelete(req.params.id);

  if (!friend) {
    return next(new AppError("No document found", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
