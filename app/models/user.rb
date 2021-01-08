class User < ApplicationRecord
  belongs_to :company

  ROLE_OPTIONS = %i(sales marketing purchasing executive)
  enum role: ROLE_OPTIONS

  scope :grouped_by_roles, -> { group(:role) }  #group users roles with count

  #users count based on each role
  def self.filter_roles_count
    users_with_roles_count  = grouped_by_roles.count
    user_count_by_roles  = roles.map { |k, v| [k , users_with_roles_count[k] || 0] }
    user_count_by_roles.to_h
  end
end
