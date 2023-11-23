class InsertHelper {
  static autoDate(row) {
    row.createdAt = new Date()
    row.updatedAt = new Date()
    return row
  }
}

module.exports = InsertHelper