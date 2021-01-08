class User < ApplicationRecord
  belongs_to :company

  ROLE_OPTIONS = %i(sales marketing purchasing executive)
  enum role: ROLE_OPTIONS

  scope :count_by_roles, -> { group(:role).count }  #group users roles with count

  #users count based on each role
  def self.filter_roles_count
    users_count  = count_by_roles
    user_count_by_roles  = roles.map { |k, v| [k , users_count[k] || 0] }
    user_count_by_roles.to_h
  end
end
