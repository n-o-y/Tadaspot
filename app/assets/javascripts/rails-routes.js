// Don't edit manually. `rake js:routes` generates this file.
function process(route, params, keys) {
  var query = [];
  for (var param in params) if (params.hasOwnProperty(param)) {
    if (keys.indexOf(param) === -1) {
      query.push(param + "=" + encodeURIComponent(params[param]));
    }
  }
  return query.length ? route + "?" + query.join("&") : route;
}

export function rails_info_properties_path(params) { return process('/rails/info/properties', params, []); }
export function rails_info_routes_path(params) { return process('/rails/info/routes', params, []); }
export function rails_info_path(params) { return process('/rails/info', params, []); }
export function rails_mailers_path(params) { return process('/rails/mailers', params, []); }
export function new_user_session_path(params) { return process('/users/sign_in', params, []); }
export function user_session_path(params) { return process('/users/sign_in', params, []); }
export function destroy_user_session_path(params) { return process('/users/sign_out', params, []); }
export function new_user_password_path(params) { return process('/users/password/new', params, []); }
export function edit_user_password_path(params) { return process('/users/password/edit', params, []); }
export function user_password_path(params) { return process('/users/password', params, []); }
export function cancel_user_registration_path(params) { return process('/users/cancel', params, []); }
export function new_user_registration_path(params) { return process('/users/sign_up', params, []); }
export function edit_user_registration_path(params) { return process('/users/edit', params, []); }
export function user_registration_path(params) { return process('/users', params, []); }
export function unsubscribe_users_path(params) { return process('/users/unsubscribe', params, []); }
export function withdraw_users_path(params) { return process('/users/withdraw', params, []); }
export function edit_users_path(params) { return process('/users/edit', params, []); }
export function users_path(params) { return process('/users', params, []); }
export function root_path(params) { return process('/', params, []); }
export function post_likes_path(params) { return process('/posts/' + params.post_id + '/likes', params, ['post_id']); }
export function posts_path(params) { return process('/posts', params, []); }
export function new_post_path(params) { return process('/posts/new', params, []); }
export function edit_post_path(params) { return process('/posts/' + params.id + '/edit', params, ['id']); }
export function post_path(params) { return process('/posts/' + params.id + '', params, ['id']); }
export function refile_app_path(params) { return process('/attachments', params, []); }
export function rails_service_blob_path(params) { return process('/rails/active_storage/blobs/' + params.signed_id + '/*filename', params, ['signed_id']); }
export function rails_blob_representation_path(params) { return process('/rails/active_storage/representations/' + params.signed_blob_id + '/' + params.variation_key + '/*filename', params, ['signed_blob_id','variation_key']); }
export function rails_disk_service_path(params) { return process('/rails/active_storage/disk/' + params.encoded_key + '/*filename', params, ['encoded_key']); }
export function update_rails_disk_service_path(params) { return process('/rails/active_storage/disk/' + params.encoded_token + '', params, ['encoded_token']); }
export function rails_direct_uploads_path(params) { return process('/rails/active_storage/direct_uploads', params, []); }
